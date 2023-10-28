import React from 'react';

export default function AtomLogin(props) {
  const { type, placeholder, value, handleChange, name } = props;
  return (
    <>
      <input value={value} name={name} onChange={handleChange} type={type} placeholder={placeholder} className="w-full py-5 px-3 mb-12 border " />
    </>
  );
}
