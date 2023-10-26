const OrganismDashboardNotif = (props) => {
  const { icon, text, item } = props;

  return (
    <div className="bg-white rounded-md shadow-md w-1/5 py-4 px-3">
      <div className="flex">
        <img src={icon} alt={text} className="flex self-center" />
        <div className="ml-5">
          <h1 className="font-firaSans text-xl">{text}</h1>
          <p className="font-firaSans font-semibold text-xl">{item}</p>
        </div>
      </div>
    </div>
  );
};

export default OrganismDashboardNotif;
