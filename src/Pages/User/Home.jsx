import NavabarUser from '../../Components/Navbar/NavbarUser';
import HomeFeature from '../../Components/User/HomeFeature';
import HomeHeader from '../../Components/User/HomeHeader';
import HomeMitra from '../../Components/User/HomeMitra';
import HomeProduct from '../../Components/User/HomeProduct';
import HomeQuestions from '../../Components/User/HomeQustions';

const Home = () => {
  return (
    <>
      <NavabarUser />
      <>
        <HomeHeader />
        <HomeProduct />
        <HomeFeature />
        <HomeMitra />
        <HomeQuestions />
      </>
    </>
  );
};

export default Home;
