import React from 'react';

const AtomButtonAction = ({ icon, text, style, action, open }) => {
  return (
    <button onClick={(action, open)} className={`${style} py-2 px-5 w-28 flex items-center mr-4 rounded-md justify-center transition ease-in-out duration-300`}>
      {icon}
      <span className="ml-2 font-firaSans font-semibold text-white">{text}</span>
    </button>
  );
};

export default AtomButtonAction;
