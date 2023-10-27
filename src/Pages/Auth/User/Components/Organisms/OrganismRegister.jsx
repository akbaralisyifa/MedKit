import React from 'react';
import AtomLogin from '../Atoms/AtomLogin';
import AtomButton from '../Atoms/AtomButton';

export default function OrganismRegister() {
  return (
    <form className="flex flex-col w-1/2 mx-auto ">
      <p className="text-4xl drop-shadow-md mt-14 mb-12 font-Sarif text-frColor text-center">Register</p>
      <AtomLogin type="text" placeholder="Username" />
      <AtomLogin type="email" placeholder="Email" />
      <AtomLogin type="password" placeholder="Password" />
      <AtomButton text="Register" />
    </form>
  );
}
