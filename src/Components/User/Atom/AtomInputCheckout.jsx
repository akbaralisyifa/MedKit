const AtomInputCheckout = (props) => {
  const { type, handleChange, placeholder, style, value, name, disabled } = props;
  return (
    <>
      <input
        name={name}
        type={type}
        onChange={handleChange}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        className={` ${style} py-3 px-2 border border-gryColor rounded-md  text-base font-firaSans placeholder:text-base placeholder:font-light mb-5`}
      />
    </>
  );
};

export default AtomInputCheckout;
