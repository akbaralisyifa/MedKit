import React from 'react';
import AtomLogin from '../Atoms/AtomLogin';
import AtomButton from '../Atoms/AtomButton';

export default function OrganismLoginAdmin({ handleLogin, handleChange, valName, valPass }) {
  return (
    <form className="flex flex-col">
      <p className="text-4xl drop-shadow-md mt-14 mb-12 font-Sarif text-frColor">Login</p>
      <div className="w-full py-2 px-3 mb-12 shadow-md bg-trColor">
        <p className="font-firaSans font-normal text-xl">
          Username : <span>admin</span>
        </p>
        <p className="font-firaSans font-normal text-xl">
          Password : <span>admin</span>
        </p>
      </div>
      <AtomLogin handleChange={handleChange} name="username" value={valName} type="text" placeholder="Username" />
      <AtomLogin handleChange={handleChange} name="password" value={valPass} type="password" placeholder="Password" />
      <AtomButton handleLogin={handleLogin} text="Sign in" />
    </form>
  );
}
