const AtomTextarea = (props) => {
  const { name, label, data, handleChange, style } = props;
  return (
    <>
      <div className="flex flex-col">
        <label htmlFor={name} className="font-firaSans ">
          {label}
        </label>
        <textarea
          name={name}
          id={name}
          value={data || ''}
          onChange={handleChange}
          placeholder={label}
          className={`${style} w-full py-2 px-2 border border-gryColor rounded-md font-firaSans placeholder:font-light mb-3 focus:outline focus:outline-1 focus:outline-scColor`}
        />
      </div>
    </>
  );
};

export default AtomTextarea;
