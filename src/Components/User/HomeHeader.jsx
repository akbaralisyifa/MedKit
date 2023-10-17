import doktor from '../../assets/hero_Image/headerImg.jpg';

const HomeHeader = () => {
  return (
    <div className="relative">
      <img src={doktor} alt="" className="inline-block w-full bg-no-repeat bg-cover bg-center -mt-32 " />
      <h1 className="uppercase font-unicaOne absolute top-0 right-0 bottom-0 left-0 bg-black -mt-32 flex justify-center items-center text-giantFont bg-opacity-60 text-white drop-shadow-2xl">Medkit</h1>
    </div>
  );
};

export default HomeHeader;
