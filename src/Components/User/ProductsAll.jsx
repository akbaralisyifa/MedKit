import { useSelector, useDispatch } from 'react-redux';
import OrganismProducts from './Organism/OrganismProducts';

const ProductsAll = () => {
  const datas = useSelector((state) => state.products.data);
  const dispatch = useDispatch();

  return (
    <div className="container mt-20">
      <div>
        <h1 className="font-unicaOne uppercase font-normal lg:text-6xl text-4xl text-center">ALL PRODUCTS</h1>
        <p className="text-center font-unicaOne text-6xl  text-white mx-auto  w-40 border-t-4 border-black">-</p>
      </div>
      <div className="mt-10">
        <input className="border-2 border-gray-500 w-96 h-12 px-5 py-3 placeholder:font-firaSans placeholder:font-light font-firaSans" type="search" placeholder="Search..." />
      </div>
      <div className="mt-16 flex gap-10 flex-wrap justify-center">
        <OrganismProducts datas={datas} />
      </div>
    </div>
  );
};

export default ProductsAll;
