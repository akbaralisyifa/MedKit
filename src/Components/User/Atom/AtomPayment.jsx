const AtomPayment = ({ img, text }) => {
  return (
    <>
      <div className="w-1/2 flex items-center">
        <img src={img} alt="" className="w-16" />
        <p className="font-firaSans font-bold text-base text-gray-500">{text}</p>
      </div>
    </>
  );
};

export default AtomPayment;
