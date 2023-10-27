import { useState } from 'react';
import logo from '../../../assets/hero_Image/logo.png';
import OrganismLoginAdmin from './Organism/OrganismLoginAdmin';

const LoginAdmin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="container lg:w-1/4 w-1/2 mx-auto  text-center mt-24 ">
      <div>
        <img src={logo} alt="" className="inline-block" />
        <h1 className="font-dangrek text-5xl text-frColor drop-shadow-md mt-2">MedKit</h1>
      </div>
      <OrganismLoginAdmin />
    </div>
  );
};

export default LoginAdmin;
