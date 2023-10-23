const OrganismCartTabelHead = ({ text }) => {
  return (
    <thead className="border-b-2 border-black">
      <tr className="text-center  ">
        <td className=" py-3 font-firaSans text-xl font-extrabold w-1/2">{text[0]}</td>
        <td className=" py-3 font-firaSans text-xl font-extrabold w-1/4">{text[1]}</td>
        <td className=" py-3 font-firaSans text-xl font-extrabold w-1/5">{text[2]}</td>
      </tr>
    </thead>
  );
};

export default OrganismCartTabelHead;
