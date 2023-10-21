const OrganismAiButton = (props) => {
  const { loading, onClick, data } = props;

  const styleButton = 'text-white  mt-4 uppercase py-2 px w-[286px] rounded-tl-full rounded-b-full text-2xl font-unicaOne self-end';
  return (
    <>
      <button onClick={onClick} className={loading ? `bg-scColor ${styleButton}` : `bg-frColor ${styleButton}`} disabled={loading || data.length === 0}>
        {loading ? 'genereting...' : 'generete'}
      </button>
    </>
  );
};

export default OrganismAiButton;
