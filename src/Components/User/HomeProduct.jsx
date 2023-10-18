import { useNavigate } from 'react-router-dom';

const HomeProduct = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex justify-center mt-14 ">
      <div className="w-1/2 text-center lg:mt-20 ">
        <h1 className="font-unicaOne pt-7 lg:text-6xl text-3xl uppercase">Dapatkan Obat !</h1>
        <p className="font-firaSans font-light lg:text-3xl text-xl lg:max-w-5xl ">Tunggu apa lagi? Mari segera bangun kesehatan sempurna Anda dengan berbelanja di MedKit</p>
        <button className="lg:text-3xl lg:py-4 lg:px-8 text-xl py-2 px-4 bg-frColor hover:bg-scColor transition-all ease-in-out font-semibold lg:mt-14 mt-10 text-white" onClick={() => navigate('/products')}>
          Belanja Sekarang
        </button>
      </div>
    </div>
  );
};

export default HomeProduct;
