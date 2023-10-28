import { Link, useNavigate } from 'react-router-dom';

import img from '../../assets/hero_Image/logo.png';

const NavbarAdmin = () => {
  const style = 'flex justify-center hover:bg-trColor hover:text-black py-5 transition ease-in-out duration-500 focus:bg-trColor font-unicaOne font-semibold text-2xl uppercase text-white focus:text-black';

  const navigate = useNavigate();

  const handleclick = (e) => {
    e.preventDefault();

    const validate = window.confirm('Yakin Ingin Keluar ?');
    if (validate) {
      localStorage.setItem('isLoginAdmin', 'false');
      navigate('/admin');
    }
  };

  return (
    <div className="w-1/6 bg-scColor shadow-xl min-h-screen">
      <div className="flex items-center mt-16 justify-center">
        <img src={img} alt="" />
      </div>
      <div className="mt-12">
        <ul className="">
          <li className="">
            <Link className={style} to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li>
            <Link className={style} to="/admin/products">
              Products
            </Link>
          </li>
          <li>
            <Link className={style} to="/admin/orderList">
              Order List
            </Link>
          </li>
          <li>
            <button onClick={handleclick} className={`${style} w-full`}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarAdmin;
