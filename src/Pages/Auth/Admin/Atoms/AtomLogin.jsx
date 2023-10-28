import React from 'react';

export default function AtomLogin({ type, placeholder, value, handleChange, name }) {
  return (
    <>
      <input value={value} name={name} onChange={handleChange} className="w-full py-5 px-3 mb-12 border " type={type} placeholder={placeholder} />
    </>
  );
}
