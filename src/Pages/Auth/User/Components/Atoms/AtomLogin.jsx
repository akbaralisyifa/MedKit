import React from 'react';

export default function AtomLogin(props) {
  const { type, placeholder } = props;
  return (
    <>
      <input className="w-full py-5 px-3 mb-12 border " type={type} placeholder={placeholder} />
    </>
  );
}
