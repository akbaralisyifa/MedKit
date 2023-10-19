import { Link } from 'react-router-dom';
import cart from '../../assets/icon/cart.png';
import logo from '../../assets/hero_Image/logo.png';
import registedUser from '../../assets/icon/registedUser.png';
import { useState } from 'react';

const NavabarUser = (props) => {
  const { textColor, imgFilter } = props;
  const [selected, setSelected] = useState(null);

  const action = (item) => {
    setSelected(item);
  };

  const styleNavbar = `drop-shadow-lg font-unicaOne text-3xl uppercase ${textColor}`;

  return (
    <div className="flex justify-around items-center py-10  bg-transparent relative z-10 ">
      <div>
        <Link to="/">
          <img src={logo} alt="" onClick={() => action('home')} />
        </Link>
      </div>
      <ul className="flex items-center">
        <li className={`mr-7 ${selected === 'home' ? 'font-bold' : ''}`}>
          <Link className={styleNavbar} to="/" onClick={() => action('home')}>
            Home
          </Link>
        </li>
        <li className={`mr-7 ${selected === 'product' ? 'font-bold' : ''}`}>
          <Link className={styleNavbar} to="/products" onClick={() => action('product')}>
            Products
          </Link>
        </li>
        <li className={`mr-12 ${selected === 'ai_medicine' ? 'font-bold' : ''}`}>
          <Link className={styleNavbar} to="/ai_medicine" onClick={() => action('ai_medicine')}>
            Ai_Medicine
          </Link>
        </li>
        <li className="mr-6">
          <Link className="" to="/login">
            <img src={registedUser} alt="" className={`drop-shadow-lg inline-block w-11 filter ${imgFilter}`} />
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <img src={cart} alt="" className={`drop-shadow-lg inline-block w-9 filter ${imgFilter}`} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavabarUser;
