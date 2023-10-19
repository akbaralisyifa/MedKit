import NavabarUser from '../../Components/Navbar/NavbarUser';
import HomeFeature from '../../Components/User/HomeFeature';
import HomeHeader from '../../Components/User/HomeHeader';
import HomeMitra from '../../Components/User/HomeMitra';
import HomeProduct from '../../Components/User/HomeProduct';
import HomeQuestions from '../../Components/User/HomeQustions';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <NavabarUser textColor="text-white" imgFilter="invert" />
      <>
        <HomeHeader />
        <HomeProduct />
        <HomeFeature />
        <HomeMitra />
        <HomeQuestions />
        <Footer bgColor="bg-trColor" />
      </>
    </>
  );
};

export default Home;
