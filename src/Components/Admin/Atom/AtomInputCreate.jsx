const AtomInputCreate = (props) => {
  const { label, name, type, style, handleChange, data, placeholder } = props;
  return (
    <>
      <div className="flex flex-col">
        <label htmlFor={name} className="font-firaSans ">
          {label}
        </label>
        <input
          type={type}
          id={name}
          name={name}
          value={data || ''}
          onChange={handleChange}
          placeholder={placeholder}
          className={`${style} py-2 px-2 border border-gryColor rounded-md font-firaSans placeholder:font-light mb-5 focus:outline focus:outline-1 focus:outline-scColor`}
        />
      </div>
    </>
  );
};

export default AtomInputCreate;
