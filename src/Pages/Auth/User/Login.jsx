import logo from '../../../assets/hero_Image/logo.png';

const Login = () => {
  return (
    <div className="container mx-auto">
      <div className="w-full text-center mt-24">
        <img src={logo} alt="" className="inline-block" />
        <h1 className="font-dangrek text-5xl text-frColor drop-shadow-md mt-2">MedKit</h1>
      </div>
      <div className="flex flex-wrap justify-around  mb-20">
        <div className="lg:w-1/2 w-full">
          <form className=" flex flex-col w-1/2 mx-auto ">
            <p className="text-4xl drop-shadow-md mt-14 mb-12 font-Sarif text-frColor text-center">Login</p>
            <input className="w-full py-5 px-3 mb-12 border " type="text" placeholder="Username" />
            <input className="w-full py-5 px-3 mb-12 border " type="password" placeholder="Password" />
            <button className="uppercase py-5 font-bold bg-frColor text-white hover:bg-scColor transition ease-in-out hover:text-slate-200">Sign in</button>
          </form>
        </div>
        <div className="lg:w-1/2 w-full mt-20 lg:mt-0 border-t-2 lg:border-t-0 lg:border-l">
          <form className="flex flex-col w-1/2 mx-auto ">
            <p className="text-4xl drop-shadow-md mt-14 mb-12 font-Sarif text-frColor text-center">Register</p>
            <input className="w-full py-5 px-3 mb-12 border " type="text" placeholder="Username" />
            <input className="w-full py-5 px-3 mb-12 border " type="email" placeholder="Email" />
            <input className="w-full py-5 px-3 mb-12 border " type="password" placeholder="Password" />
            <button className="uppercase py-5 font-bold bg-frColor text-white hover:bg-scColor transition ease-in-out hover:text-slate-200">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
