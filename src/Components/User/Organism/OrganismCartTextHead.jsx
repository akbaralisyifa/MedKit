const OrganismTextHead = ({ text, garis }) => {
  return (
    <div>
      <h1 className="font-firaSans font-normal lg:text-5xl text-2xl text-center">{text}</h1>
      <p className="text-center font-unicaOne text-6xl  text-white mx-auto  lg:w-20 w-14 border-t-4 border-black">{garis}</p>
    </div>
  );
};

export default OrganismTextHead;
