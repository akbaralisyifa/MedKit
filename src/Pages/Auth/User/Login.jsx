import logo from '../../../assets/hero_Image/logo.png';
import OrganismLogin from './Components/Organisms/OrganismLogin';
import OrganismRegister from './Components/Organisms/OrganismRegister';

const Login = () => {
  return (
    <div className="container mx-auto">
      <div className="w-full text-center mt-24">
        <img src={logo} alt="" className="inline-block" />
        <h1 className="font-dangrek text-5xl text-frColor drop-shadow-md mt-2">MedKit</h1>
      </div>
      <div className="flex flex-wrap justify-around  mb-20">
        <div className="lg:w-1/2 w-full">
          <OrganismLogin />
        </div>
        <div className="lg:w-1/2 w-full mt-20 lg:mt-0 border-t-2 lg:border-t-0 lg:border-l">
          <OrganismRegister />
        </div>
      </div>
    </div>
  );
};

export default Login;
