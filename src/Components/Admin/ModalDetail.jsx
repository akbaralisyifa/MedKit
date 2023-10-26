import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';

export default function ModalDetail({ children, data }) {
  const [opened, { open, close }] = useDisclosure(false);

  const styleUlHead = 'font-firaSans mb-3 text-base font-semibold';
  const styleUlBody = 'font-firaSans mb-3 ml-5 text-base font-light';
  return (
    <div>
      <>
        <Modal opened={opened} onClose={close} size={'xl'}>
          <h1 className="text-center font-unicaOne uppercase font-semibold text-3xl">Detail Product</h1>
          <div className="flex mt-10 items-center">
            <div className="w-1/2">
              <h1 className="font-firaSans text-2xl mb-2 font-semibold">{data.name}</h1>
              <img src={data.image} alt={data.name} className="h-72 rounded-md drop-shadow-md" />
            </div>
            <div className="w-1/2 flex">
              <ul>
                <li className={styleUlHead}>Nomor Izin :</li>
                <li className={styleUlHead}>Harga :</li>
                <li className={styleUlHead}>Komosisi :</li>
                <li className={styleUlHead}>Kategori :</li>
                <li className={styleUlHead}>Golongan Obat :</li>
              </ul>
              <ul>
                <li className={styleUlBody}>{data.noIzin}</li>
                <li className={styleUlBody}>{data.harga}</li>
                <li className={styleUlBody}>{data.komposisi}</li>
                <li className={styleUlBody}>{data.kategori}</li>
                <li className={styleUlBody}>{data.golonganObat}</li>
              </ul>
            </div>
          </div>
          <div>
            <ul className="mt-5">
              <li className="font-firaSans text-base font-semibold">Deskripsi :</li>
              <li className="font-firaSans text-base font-light">{data.deskripsi}</li>
            </ul>
            <ul className="mt-5">
              <li className="font-firaSans text-base font-semibold">Dosis :</li>
              <li className="font-firaSans text-base font-light">{data.dosis}</li>
            </ul>
          </div>
          <div className="my-5 flex justify-end mr-10">
            <button type="button" onClick={close} className="border border-gray-400 rounded-md py-2 px-6  bg-slate-100 font-firaSans text-black hover:bg-slate-600 hover:text-white transition ease-in-out duration-300">
              Close
            </button>
          </div>
        </Modal>

        <div onClick={open}>{children}</div>
      </>
    </div>
  );
}
