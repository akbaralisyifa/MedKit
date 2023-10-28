import React from 'react';
import AtomLogin from '../Atoms/AtomLogin';
import AtomButton from '../Atoms/AtomButton';

export default function OrganismLogin(props) {
  const { handleLogin, handleChange, valueUsername, valuePassword } = props;
  return (
    <form className=" flex flex-col w-1/2 mx-auto ">
      <p className="text-4xl drop-shadow-md mt-14 mb-12 font-Sarif text-frColor text-center">Login</p>
      <AtomLogin handleChange={handleChange} value={valueUsername} name="username" type="text" placeholder="Username" />
      <AtomLogin handleChange={handleChange} value={valuePassword} name="password" type="password" placeholder="Password" />
      <AtomButton handle={handleLogin} text="Sign in" />
    </form>
  );
}
