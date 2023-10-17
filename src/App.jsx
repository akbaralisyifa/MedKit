import { Route, Routes } from 'react-router-dom';
import LoginAdmin from './Pages/Auth/Admin/LoginAdmin';
import Login from './Pages/Auth/User/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<LoginAdmin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
