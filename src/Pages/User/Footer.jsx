import { Link } from 'react-router-dom';
import github from '../../assets/icon/github.png';
import ig from '../../assets/icon/ig.png';
import twitter from '../../assets/icon/twitter.png';

const Footer = ({ bgColor }) => {
  const medsos = [github, ig, twitter];

  return (
    <div className={`w-full ${bgColor} pt-72 pb-20`}>
      <div className="flex justify-between mx-auto  w-52">
        {medsos.map((med, index) => (
          <Link key={index} to={() => {}}>
            <img src={med} alt={med} className="inline-block w-12 filter opacity-70 hover:opacity-100 transition-all ease-in-out cursor-pointer" />
          </Link>
        ))}
      </div>
      <p className="text-center pt-9 font-normal text-gray-600 font-firaSans">
        Hak Cipta &copy;<span className="text-black">MedKit</span> 2023
      </p>
    </div>
  );
};
export default Footer;
