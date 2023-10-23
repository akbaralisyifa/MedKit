import imgBag from '../../assets/icon/bag.png';

const NavbarCheckout = () => {
  return (
    <nav className="bg-white shadow-md py-6">
      <div className="container flex justify-between items-center">
        <h1 className="font-firaSans text-2xl">MedKit - Family Medicine</h1>
        <img src={imgBag} alt="" className="w-11" />
      </div>
    </nav>
  );
};

export default NavbarCheckout;
