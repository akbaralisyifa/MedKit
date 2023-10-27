import React from 'react';
import { useNavigate } from 'react-router-dom';
import ModalDetailUser from '../ModalDetailUser';

export default function AtomButtonDetail({ data }) {
  const navigate = useNavigate();
  return (
    <>
      <ModalDetailUser data={data}>
        <button className="text-center absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-3xl font-firaSans font-semibold backdrop-blur-sm cursor-pointer text-gray-500 drop-shadow-md opacity-0 hover:opacity-100 transition ease-in-out">
          Detail Product
        </button>
      </ModalDetailUser>
    </>
  );
}
