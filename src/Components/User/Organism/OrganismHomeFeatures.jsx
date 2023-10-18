const OrganismHomeFeatures = ({ judul, text, lab, order, justify }) => {
  return (
    <div className="w-full lg:mt-48 mt-10 flex justify-center lg:p-0 p-10">
      <div className="flex flex-wrap lg:justify-between justify-center">
        <div className={`lg:w-1/2 w-full flex flex-col self-center ${order}`}>
          <h1 className="font-league lg:text-5xl text-3xl lg:text-left text-center">{judul}</h1>
          <p className={`pt-4 max-w-3xl lg:text-3xl text-xl font-light text-justify font-Gowun`}>{text}</p>
        </div>
        <div className={`lg:w-1/2 lg:mt-0 mt-10 flex ${justify}`}>
          <img src={lab} alt="" className="inline-block w-557 rounded-3xl" />
        </div>
      </div>
    </div>
  );
};

export default OrganismHomeFeatures;
