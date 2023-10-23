const AtomInputCheckout = (props) => {
  const { type, handleChange, placeholder, style } = props;
  return (
    <>
      <input className={` ${style} py-3 px-2 border border-gryColor rounded-md  text-base font-firaSans placeholder:text-base placeholder:font-light mb-5`} type={type} onChange={handleChange} placeholder={placeholder} />
    </>
  );
};

export default AtomInputCheckout;
