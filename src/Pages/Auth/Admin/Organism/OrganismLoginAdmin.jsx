import React from 'react';
import AtomLogin from '../Atoms/AtomLogin';
import AtomButton from '../Atoms/AtomButton';

export default function OrganismLoginAdmin() {
  return (
    <form className="flex flex-col">
      <p className="text-4xl drop-shadow-md mt-14 mb-12 font-Sarif text-frColor">Login</p>
      <AtomLogin type="text" placeholder="Username" />
      <AtomLogin type="password" placeholder="Password" />
      <AtomButton text="Sign in" />
    </form>
  );
}
