import { Route, Routes } from 'react-router-dom';
import LoginAdmin from './Pages/Auth/Admin/LoginAdmin';
import Login from './Pages/Auth/User/Login';
import Home from './Pages/User/Home';
import PageNotFound from './Pages/PageNotFound';

function App() {
  return (
    <>
      <Routes>
        {/* Bagian Admin */}
        <Route path="/admin" element={<LoginAdmin />} />

        {/* Bagian User */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />

        {/* Page Not Found */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
