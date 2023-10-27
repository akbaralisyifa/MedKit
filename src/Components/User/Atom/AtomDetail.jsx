import React from 'react';

export default function AtomDetail({ text, value }) {
  return (
    <ul className="mt-5">
      <li className="font-firaSans text-2xl font-semibold">{text}</li>
      <li className="font-firaSans text-xl font-light">{value}</li>
    </ul>
  );
}
