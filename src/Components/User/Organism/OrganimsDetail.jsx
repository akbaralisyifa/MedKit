import React from 'react';
import AtomDetail from '../Atom/AtomDetail';

export default function OrganimsDetail({ data }) {
  return (
    <>
      <AtomDetail text="Deskripsi " value={data.deskripsi} />
      <AtomDetail text="Dosis" value={data.dosis} />
      <AtomDetail text="Kegunaan / Manfaat :" value={data.kegunaan} />
      <AtomDetail text="Komposisi" value={data.komposisi} />
      <AtomDetail text="Kategori" value={data.golonganObat} />
    </>
  );
}
