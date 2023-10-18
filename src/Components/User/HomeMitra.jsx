import biofarma from '../../assets/icon/biofarma.png';
import goapotik from '../../assets/icon/goapotik.png';
import k24 from '../../assets/icon/k24.png';
import kimiaFarma from '../../assets/icon/kimiaFarma.png';

const HomeMitra = () => {
  const images = [biofarma, kimiaFarma, goapotik, k24];
  const style = 'w-60 inline-block grayscale hover:grayscale-0 transition ease-in-out cursor-pointer drop-shadow-2xl';

  return (
    <div className="w-full bg-trColor mt-40">
      <div className="pt-24 flex flex-wrap text-center">
        <h1 className="w-full font-league uppercase text-6xl drop-shadow-2xl">MITRA KAMI YANG TERPERCAYA</h1>
        <div className="container flex-wrap flex justify-evenly mt-14 items-center">
          {images.map((img, index) => (
            <img className={style} src={img} alt={img} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeMitra;
