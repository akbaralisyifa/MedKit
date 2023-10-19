const OrganismProducts = ({ datas, action }) => {
  return (
    <>
      {datas.map((val, index) => (
        <div key={index} className="lg:w-[31.5%] md:w-1/2 w-full text-center">
          <img src={val.image} alt={val.name} className="inline-block" onClick={action} />
          <h1 className="lg:font-bold text-slate-700 font-firaSans text-3xl font-semibold pt-4" onClick={action}>
            {val.name}
          </h1>
          <p className="font-firaSans text-3xl text-slate-700 font-light pt-1 bg-slate-300" onClick={action}>
            Rp. {val.harga}.000
          </p>
          <p className="text-2xl">⭐⭐⭐⭐⭐</p>
        </div>
      ))}
    </>
  );
};

export default OrganismProducts;
