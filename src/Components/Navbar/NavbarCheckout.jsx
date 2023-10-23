import { useNavigate } from 'react-router-dom';
import imgBag from '../../assets/icon/bag.png';

const NavbarCheckout = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md py-6">
      <div className="container flex justify-between items-center">
        <h1 className="font-firaSans text-2xl">MedKit - Family Medicine</h1>
        <img onClick={() => navigate('/cart')} src={imgBag} alt="logo_bag" className="w-11 cursor-pointer" />
      </div>
    </nav>
  );
};

export default NavbarCheckout;
