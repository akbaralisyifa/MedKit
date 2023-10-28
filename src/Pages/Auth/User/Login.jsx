import { useState } from 'react';
import logo from '../../../assets/hero_Image/logo.png';
import OrganismLogin from './Components/Organisms/OrganismLogin';
import OrganismRegister from './Components/Organisms/OrganismRegister';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../Store/AuthSlice';
import { createUserAsyc } from '../../../Store/UserSlice';

const Login = () => {
  const initialValue = {
    username: '',
    password: '',
    email: '',
  };

  const [inputData, setInputData] = useState(initialValue);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const datas = useSelector((state) => state.users.data);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;

    setInputData({
      ...inputData,
      [name]: value,
    });

    // Perbarui state username dan password
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const getUsersValidate = datas.map((data) => {
      data.username === username && data.password === password;
    });

    if (getUsersValidate) {
      dispatch(login());
      localStorage.setItem('isLogin', 'true');
      navigate('/');
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const userRegisted = datas.some((data) => data.username === inputData.username && data.email === inputData.email);

    if (!userRegisted) {
      dispatch(createUserAsyc(inputData));
      alert('Data Mu Berhasil Terdaftar !');
      setInputData(initialValue);
    } else {
      alert('Data Sudah Pernah Terdaftar');
      setInputData(initialValue);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="w-full text-center mt-24">
        <img src={logo} alt="" className="inline-block" />
        <h1 className="font-dangrek text-5xl text-frColor drop-shadow-md mt-2">MedKit</h1>
      </div>
      <div className="flex flex-wrap justify-around  mb-20">
        <div className="lg:w-1/2 w-full">
          <OrganismLogin handleLogin={handleLogin} valueUsername={username} valuePassword={password} handleChange={handleChange} />
        </div>
        <div className="lg:w-1/2 w-full mt-20 lg:mt-0 border-t-2 lg:border-t-0 lg:border-l">
          <OrganismRegister handleRegister={handleRegister} handleChange={handleChange} valueName={inputData.username} valuePass={inputData.password} valueMail={inputData.email} />
        </div>
      </div>
    </div>
  );
};

export default Login;
