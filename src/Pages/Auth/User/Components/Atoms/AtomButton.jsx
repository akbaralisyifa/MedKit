import React from 'react';

export default function AtomButton({ text, handle }) {
  return (
    <>
      <button onClick={handle} className="uppercase py-5 font-bold bg-frColor text-white hover:bg-scColor transition ease-in-out hover:text-slate-200">
        {text}
      </button>
    </>
  );
}
