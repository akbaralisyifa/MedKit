const AtomButtonCreate = ({ open }) => {
  return (
    <>
      <button onClick={open} className="font-firaSans drop-shadow-md py-3 px-7 rounded-md hover:bg-scColor transition ease-in-out duration-300 mt-10 bg-frColor text-white text-xl">
        Create Stock
      </button>
    </>
  );
};

export default AtomButtonCreate;
