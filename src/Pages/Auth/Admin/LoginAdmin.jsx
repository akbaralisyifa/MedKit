import { useState } from 'react';
import logo from '../../../assets/hero_Image/logo.png';
import OrganismLoginAdmin from './Organism/OrganismLoginAdmin';
import { useNavigate } from 'react-router-dom';

const LoginAdmin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const DummyData = {
    username: 'admin',
    password: 'admin',
  };

  const handleChange = (e) => {
    e.preventDefault();

    const value = e.target.value;
    const name = e.target.name;

    if (name === 'username') {
      setUsername(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const validate = DummyData.username === username && DummyData.password === password;

    if (validate) {
      localStorage.setItem('isLoginAdmin', 'true');
      navigate('/dashboard');
      setUsername('');
      setPassword('');
    }
  };

  return (
    <div className="container lg:w-1/4 w-1/2 mx-auto  text-center mt-24 ">
      <div>
        <img src={logo} alt="" className="inline-block" />
        <h1 className="font-dangrek text-5xl text-frColor drop-shadow-md mt-2">MedKit</h1>
      </div>

      <OrganismLoginAdmin handleChange={handleChange} handleLogin={handleLogin} valName={username} valPass={password} />
    </div>
  );
};

export default LoginAdmin;
