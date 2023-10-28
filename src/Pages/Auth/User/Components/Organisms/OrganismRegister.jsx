import React from 'react';
import AtomLogin from '../Atoms/AtomLogin';
import AtomButton from '../Atoms/AtomButton';

export default function OrganismRegister({ handleChange, valueUsername, valuePassword, valueEmail, handleRegister }) {
  return (
    <form className="flex flex-col w-1/2 mx-auto ">
      <p className="text-4xl drop-shadow-md mt-14 mb-12 font-Sarif text-frColor text-center">Register</p>
      <AtomLogin value={valueUsername} handleChange={handleChange} name="username" type="text" placeholder="Username" />
      <AtomLogin value={valuePassword} handleChange={handleChange} name="email" type="email" placeholder="Email" />
      <AtomLogin value={valueEmail} handleChange={handleChange} name="email" type="password" placeholder="Password" />
      <AtomButton handle={handleRegister} text="Register" />
    </form>
  );
}
