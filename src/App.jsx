import { Route, Routes } from 'react-router-dom';
import LoginAdmin from './Pages/Auth/Admin/LoginAdmin';
import Login from './Pages/Auth/User/Login';
import Home from './Pages/User/Home';
import PageNotFound from './Pages/PageNotFound';
import Product from './Pages/User/Product';
import AiMedicine from './Pages/User/Ai_Medicine';

function App() {
  return (
    <>
      <Routes>
        {/* Bagian Admin */}
        <Route path="/admin" element={<LoginAdmin />} />

        {/* Bagian User */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/ai_medicine" element={<AiMedicine />} />

        {/* Page Not Found */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
