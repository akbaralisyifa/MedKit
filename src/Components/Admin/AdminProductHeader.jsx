import AtomButtonCreate from './Atom/AtomButtonCreate';
import AtomTextHeader from './Atom/AtomTextHeader';
import OrganismThead from './Organism/OrganismThead';

import img from '../../assets/img/1.jpg';
import OrganismButtonAction from './Organism/OrganismButtonAction';

const AdminProductsHeader = () => {
  return (
    <div className="p-10 mt-6">
      <AtomTextHeader text="Stock Maintenance" />

      <AtomButtonCreate />

      <table className="mt-6 w-full">
        <thead className="border-b-4 border-gray-700">
          <OrganismThead />
        </thead>

        <tbody>
          <tr className="border-b border-gray-500">
            <td className="text-center py-5 ">
              <p className="font-firaSans font-semibold text-xl">1</p>
            </td>
            <td className=" flex justify-center items-center py-5 w-96 mx-auto">
              <img src={img} alt="" className="w-24 rounded-md flex self-center" />
              <div className="ml-5">
                <h1 className="font-firaSans font-semibold text-xl">Glycolic Acid Cream</h1>
                <p className="font-firaSans text-base">Obat Oles</p>
              </div>
            </td>
            <td className="text-center py-5 ">
              <p className="font-firaSans font-semibold text-xl">Rp. 40k</p>
            </td>
            <td className="text-center py-5 ">
              <p className="font-firaSans font-semibold text-xl">1</p>
            </td>
            <td className="py-5  w-96">
              <div className="flex justify-center w-96 items-center">
                <OrganismButtonAction />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdminProductsHeader;
