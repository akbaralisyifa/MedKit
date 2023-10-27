// import image from '../../../assets/img/1.jpg';

import { useNavigate } from 'react-router-dom';
import AtomButtonDetail from '../Atom/AtomButtonDetail';

const OrganismProducts = ({ datas }) => {
  const navigate = useNavigate();
  return (
    <>
      {datas.map((data, index) => (
        <div key={index} className="lg:w-[31.5%] md:w-1/2 w-full bg-white shadow-md rounded-xl overflow-hidden">
          <div className="relative">
            <img src={data.image} alt="" className="inline-block w-full h-80 hover:filter hover:blur-sm transition ease-in-out" />

            <AtomButtonDetail data={data} />
          </div>
          <div className="pl-5  mt-4">
            <h1 className="lg:font-bold text-slate-700 font-firaSans text-xl font-semibold cursor-pointer">{data.name}</h1>
            <p className="font-firaSans text-xl font-bold text-slate-700 pt-1 cursor-pointer">
              {data.harga}.000 <span className="font-light">/ Pcs</span>
            </p>
          </div>
          <div className="px-5 flex justify-between mb-5 items-center">
            <p className="text-base">⭐⭐⭐⭐⭐</p>
            <button
              onClick={() => {
                navigate('/cart');
              }}
              className="font-firaSans text-white bg-frColor py-2 px-8 rounded-md"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default OrganismProducts;
