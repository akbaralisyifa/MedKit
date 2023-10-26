import AtomButtonCreate from './Atom/AtomButtonCreate';
import AtomTextHeader from './Atom/AtomTextHeader';
import OrganismThead from './Organism/OrganismThead';

import OrganismButtonAction from './Organism/OrganismButtonAction';
import ModalCreateProducts from './ModalCreateProducts';

import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createDataAsyc, deleteDataAsyc } from '../../Store/ProductSlice';

const AdminProductsHeader = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const initialValue = {
    name: '',
    image: '',
    harga: 0,
    deskripsi: '',
    kategori: '',
    komposis: '',
    dosis: '',
    efek: '',
    noIzin: '',
    stok: 0,
    golonganObat: '',
  };

  const [data, setData] = useState(initialValue);

  const products = useSelector((state) => state.products.data);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleCreate = (e) => {
    e.preventDefault();

    dispatch(createDataAsyc(data));
    setData(initialValue);
    alert('Data Berhasil Di Tambah !');
  };

  const handleDelete = (productId) => {
    const confirm = window.confirm('Yakin ingin menghapus ?');
    if (confirm) {
      dispatch(deleteDataAsyc(productId));
    }
  };

  return (
    <div className="p-10 mt-6">
      <AtomTextHeader text="Stock Maintenance" />

      <AtomButtonCreate open={open} />
      {/* Modals */}
      <ModalCreateProducts data={data} handleCreate={handleCreate} handleChange={handleChange} opened={opened} close={close} />

      <table className="mt-6 w-full">
        <thead className="border-b-4 border-gray-700">
          <OrganismThead />
        </thead>

        <tbody>
          {products.map((val, index) => (
            <tr key={val.id} className="border-b border-gray-500">
              <td className="text-center py-5 ">
                <p className="font-firaSans font-semibold text-xl">{index + 1}</p>
              </td>
              <td className=" flex justify-center items-center py-5 w-96 mx-auto">
                <img src={val.image} alt="" className="w-24 rounded-md flex self-center" />
                <div className="ml-5">
                  <h1 className="font-firaSans font-semibold text-xl">{val.name}</h1>
                  <p className="font-firaSans text-base">{val.kategori}</p>
                </div>
              </td>
              <td className="text-center py-5 ">
                <p className="font-firaSans font-semibold text-xl">Rp. {val.harga}k</p>
              </td>
              <td className="text-center py-5 ">
                <p className="font-firaSans font-semibold text-xl">{val.stok}</p>
              </td>
              <td className="py-5  w-96">
                <div className="flex justify-center w-96 items-center">
                  <OrganismButtonAction handleDelete={() => handleDelete(val.id)} data={val} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProductsHeader;
