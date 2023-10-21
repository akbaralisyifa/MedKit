const OrganismAiTextarea = (props) => {
  const { value, onChange, name } = props;

  const placeholder = 'xmp : Berikan List Obat Sakit Perut ?';
  const stylePlaceholder = 'lg:placeholder:text-2xl placeholder:text-xl placeholder:font-firaSans placeholder:font-light';

  return (
    <>
      <textarea className={`px-6 py-7 border border-scColor shadow-sm shadow-scColor rounded-sm h-52 lg:text-2xl text-xl font-firaSans ${stylePlaceholder}`} placeholder={placeholder} name={name} value={value} onChange={onChange} />
    </>
  );
};
export default OrganismAiTextarea;
