import { useNavigate } from 'react-router-dom';

const HomeProduct = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex justify-center">
      <div className="lg:w-1/2 w-1/2 text-center lg:mt-20 mt-14 ">
        <h1 className="font-unicaOne pt-7 lg:text-6xl text-4xl uppercase">Dapatkan Obat !</h1>
        <p className="font-firaSans font-light lg:text-3xl text-xl ">Tunggu apa lagi? Mari segera bangun kesehatan sempurna Anda dengan berbelanja di MedKit</p>
        <button className="py-4 px-8 bg-frColor hover:bg-scColor transition-all ease-in-out font-semibold text-3xl mt-14 text-white" onClick={() => navigate('/product')}>
          Belanja Sekarang
        </button>
      </div>
    </div>
  );
};

export default HomeProduct;
