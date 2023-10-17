import { useState } from 'react';
import logo from '../../../assets/hero_Image/logo.png';

const LoginAdmin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="container lg:w-1/4 w-1/2 mx-auto  text-center mt-24 ">
      <div>
        <img src={logo} alt="" className="inline-block" />
        <h1 className="font-dangrek text-5xl text-frColor drop-shadow-md mt-2">MedKit</h1>
      </div>
      <form className="flex flex-col">
        <p className="text-4xl drop-shadow-md mt-14 mb-12 font-Sarif text-frColor">Login</p>
        <input className="w-full py-5 px-3 mb-12 border " type="text" placeholder="Username" />
        <input className="w-full py-5 px-3 mb-12 border " type="password" placeholder="Password" />
        <button className="uppercase py-5 font-bold bg-frColor text-white hover:bg-scColor transition ease-in-out hover:text-slate-200">Sign in</button>
      </form>
    </div>
  );
};

export default LoginAdmin;
