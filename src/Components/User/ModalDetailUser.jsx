import React, { useState } from 'react';

import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import OrganimsDetail from './Organism/OrganimsDetail';
import Footer from '../../Pages/User/Footer';

export default function ModalDetailUser({ children, data }) {
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useState(1);

  const inchValue = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  const dechValue = () => {
    setValue(value + 1);
  };

  return (
    <>
      <Modal opened={opened} onClose={close} size={'70%'}>
        <div className="container mb-20">
          <div className="mt-20 flex px-20">
            <div className="w-1/2">
              <img src={data.image} alt="" className="w-557 shadow-md" />
            </div>
            <div className="w-1/2 flex flex-col items-center">
              <h1 className="font-firaSans text-5xl ">{data.name}</h1>
              <p className="uppercase font-firaSans text-base font-light mt-5">
                Produk Tersedia : <span className="font-semibold text-xl">{data.stok}</span>
              </p>
              <p className="font-firaSans font-normal text-4xl mt-5">{data.harga}.000</p>
              <div className="flex items-center mt-5">
                <p className="font-firaSans mr-3 text-xl">Quantity</p>
                <div className="flex items-center">
                  <button
                    onClick={inchValue}
                    disabled={value === 1}
                    className={value === 1 ? `text-center py2 px-2 border border-gray-500 text-white bg-gray-400 mr-2 font-firaSans text-xl ` : `text-center py2 px-2 border border-gray-500 text-white bg-frColor  mr-2 font-firaSans text-xl`}
                  >
                    -
                  </button>
                  <p className={`font-firaSans text-xl font-semibold py-2 px-2 mr-2`}>{value}</p>
                  <button onClick={dechValue} className="py2 px-2 border border-gray-500 text-white bg-frColor font-firaSans text-xl">
                    +
                  </button>
                </div>
              </div>
              <div className="mt-10 w-full flex flex-col items-center">
                <button className="w-4/6 py-3 border bg-trColor border-scColor text-base font-semibold text-black font-firaSans ">Add To Cart</button>
                <button className="w-4/6 py-3 border mt-2 bg-frColor border-frColor text-base font-semibold text-white font-firaSans ">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="px-20 mt-14">
            <OrganimsDetail data={data} />
          </div>
        </div>
        <Footer />
      </Modal>

      <div onClick={open}>{children}</div>
    </>
  );
}
