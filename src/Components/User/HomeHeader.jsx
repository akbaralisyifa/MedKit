import doktor from '../../assets/hero_Image/headerImg.jpg';

const HomeHeader = () => {
  return (
    <div className="relative">
      <img src={doktor} alt="" className="heroImage inline-block min-w-full" />
      <h1 className="uppercase font-unicaOne absolute -top-4 right-0 left-0 bottom-0 bg-black -mt-32 flex justify-center items-center lg:text-giantFont md:text-8xl text-7xl bg-opacity-60 text-white drop-shadow-2xl">Medkit</h1>
    </div>
  );
};

export default HomeHeader;
