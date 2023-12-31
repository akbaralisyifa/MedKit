import { Modal } from '@mantine/core';
import AtomInputCreate from './Atom/AtomInputCreate';
import AtomTextarea from './Atom/AtomTextarea';

const ModalCreateProducts = (props) => {
  const { opened, close, handleChange, data, handleCreate } = props;

  return (
    <Modal opened={opened} onClose={close} size="xl">
      <h1 className="text-center font-unicaOne uppercase font-semibold text-3xl">Create Product</h1>
      <form onSubmit={handleCreate} className="mt-10">
        <div className="flex">
          <div className="w-1/2 mr-1">
            <AtomInputCreate handleChange={handleChange} data={data.name} placeholder="Input Nama Produk" label="Nama Produk" name="name" type="text" />
            <AtomInputCreate handleChange={handleChange} data={data.harga} placeholder="Input Harga Produk" label="Harga" name="harga" type="text" />
            <AtomInputCreate handleChange={handleChange} data={data.image} placeholder="Input Link Gambar Produk" label="Gambar" name="image" type="text" />
            <AtomInputCreate handleChange={handleChange} data={data.noIzin} placeholder="Input Nomor Izin" label="Nomor Izin" name="noIzin" type="text" />
            <AtomInputCreate handleChange={handleChange} data={data.stok} placeholder="Input Jumlah Stok" label="Jumlah Stok" name="stok" type="number" />
            <AtomInputCreate handleChange={handleChange} data={data.golonganObat} placeholder="Input Golongan Obat" label="Golongan Obat" name="golonganObat" type="text" />
          </div>
          <div className="w-1/2">
            <AtomInputCreate handleChange={handleChange} data={data.kategori} placeholder="Input Kategori Produk" label="Produk Kategori" name="kategori" type="text" />
            <AtomInputCreate handleChange={handleChange} data={data.dosis} placeholder="Input Dosis Produk" label="Dosis Produk" name="dosis" type="text" />
            <AtomTextarea handleChange={handleChange} data={data.deskripsi} placeholder="Input Deskripsi Produk" label="Deskripsi Product" name="deskripsi" style="h-36" />
            <AtomTextarea handleChange={handleChange} data={data.komposisi} placeholder="Input Komosisi" label="Komposisi" name="komposisi" style="h-32" />
          </div>
        </div>

        <div className="flex justify-end">
          <button type="button" onClick={close} className="border border-gray-400 rounded-md py-2 px-4 mr-2 bg-slate-100 font-firaSans text-black hover:bg-slate-600 hover:text-white transition ease-in-out duration-300">
            Close
          </button>
          <button type="submit" onClick={close} className="border border-gray-400 rounded-md py-2 px-7 bg-frColor font-firaSans text-white hover:bg-scColor transition ease-in-out duration-300">
            Create
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default ModalCreateProducts;
