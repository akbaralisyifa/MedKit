import React, { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import AtomInputCreate from './Atom/AtomInputCreate';
import AtomTextarea from './Atom/AtomTextarea';
import { updateDataAsyc } from '../../Store/ProductSlice';

export default function ModalEdit({ children, data }) {
  const [opened, { open, close }] = useDisclosure(false);

  const initialValue = {
    id: data.id,
    name: data.name,
    image: data.image,
    harga: data.harga,
    deskripsi: data.deskripsi,
    kategori: data.kategori,
    komposisi: data.komposisi,
    dosis: data.dosis,
    efek: data.efek,
    noIzin: data.noIzin,
    stok: data.stok,
    golonganObat: data.golonganObat,
  };

  const [value, setValue] = useState(initialValue);
  console.log(value);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    if (value) {
      dispatch(updateDataAsyc(value));
    }
  };

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication" size={'xl'}>
        <h1 className="text-center font-unicaOne uppercase font-semibold text-3xl">Update Product</h1>
        <form onSubmit={handleUpdate} className="mt-10">
          <div className="flex">
            <div className="w-1/2 mr-1">
              <AtomInputCreate handleChange={handleChange} data={value.name} placeholder="Input Nama Produk" label="Nama Produk" name="name" type="text" />
              <AtomInputCreate handleChange={handleChange} data={value.harga} placeholder="Input Harga Produk" label="Harga" name="harga" type="text" />
              <AtomInputCreate handleChange={handleChange} data={value.image} placeholder="Input Link Gambar Produk" label="Gambar" name="image" type="text" />
              <AtomInputCreate handleChange={handleChange} data={value.noIzin} placeholder="Input Nomor Izin" label="Nomor Izin" name="noIzin" type="text" />
              <AtomInputCreate handleChange={handleChange} data={value.stok} placeholder="Input Jumlah Stok" label="Jumlah Stok" name="stok" type="number" />
              <AtomInputCreate handleChange={handleChange} data={value.golonganObat} placeholder="Input Golongan Obat" label="Golongan Obat" name="golonganObat" type="text" />
            </div>
            <div className="w-1/2">
              <AtomInputCreate handleChange={handleChange} data={value.kategori} placeholder="Input Kategori Produk" label="Produk Kategori" name="kategori" type="text" />
              <AtomInputCreate handleChange={handleChange} data={value.dosis} placeholder="Input Dosis Produk" label="Dosis Produk" name="dosis" type="text" />
              <AtomTextarea handleChange={handleChange} data={value.deskripsi} placeholder="Input Deskripsi Produk" label="Deskripsi Product" name="deskripsi" style="h-36" />
              <AtomTextarea handleChange={handleChange} data={value.komposisi} placeholder="Input Komosisi" label="Komposisi" name="komposisi" style="h-32" />
            </div>
          </div>

          <div className="flex justify-end">
            <button type="button" onClick={close} className="border border-gray-400 rounded-md py-2 px-4 mr-2 bg-slate-100 font-firaSans text-black hover:bg-slate-600 hover:text-white transition ease-in-out duration-300">
              Close
            </button>
            <button type="submit" onClick={close} className="border border-gray-400 rounded-md py-2 px-7 bg-frColor font-firaSans text-white hover:bg-scColor transition ease-in-out duration-300">
              Update
            </button>
          </div>
        </form>
      </Modal>

      <div onClick={open}>{children}</div>
    </>
  );
}
