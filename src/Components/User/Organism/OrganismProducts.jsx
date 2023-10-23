import image from '../../../assets/img/1.jpg';

const OrganismProducts = ({ datas, action }) => {
  return (
    <>
      {datas.map((data, index) => (
        <div key={index} className="lg:w-[31.5%] md:w-1/2 w-full bg-white shadow-md rounded-xl overflow-hidden">
          <div className="relative">
            <img src={image} alt="" className="inline-block w-full hover:filter hover:blur-sm transition ease-in-out" />
            <p className="text-center absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-3xl font-firaSans font-semibold backdrop-blur-sm cursor-pointer text-gray-500 drop-shadow-md opacity-0 hover:opacity-100 transition ease-in-out">
              Detail Product
            </p>
          </div>
          <div className="pl-5  mt-4">
            <h1 className="lg:font-bold text-slate-700 font-firaSans text-xl font-semibold cursor-pointer">Glycolic Acid Cream</h1>
            <p className="font-firaSans text-xl font-bold text-slate-700 pt-1 cursor-pointer">
              40.000 <span className="font-light">/ Pcs</span>
            </p>
          </div>
          <div className="px-5 flex justify-between mb-5 items-center">
            <p className="text-base">⭐⭐⭐⭐⭐</p>
            <button className="font-firaSans text-white bg-frColor py-2 px-8 rounded-md">Add to Cart</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default OrganismProducts;
