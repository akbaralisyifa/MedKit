import NavabarUser from '../../Components/Navbar/NavbarUser';
import HomeHeader from '../../Components/User/HomeHeader';
import HomeProduct from '../../Components/User/HomeProduct';

const Home = () => {
  return (
    <>
      <NavabarUser />
      <div>
        <HomeHeader />
        <HomeProduct />
      </div>
    </>
  );
};

export default Home;
