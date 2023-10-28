import { Route, Routes } from 'react-router-dom';
import LoginAdmin from './Pages/Auth/Admin/LoginAdmin';
import Login from './Pages/Auth/User/Login';
import Home from './Pages/User/Home';
import PageNotFound from './Pages/PageNotFound';
import Product from './Pages/User/Product';
import AiMedicine from './Pages/User/Ai_Medicine';
import Cart from './Pages/User/Cart';
import Checkout from './Pages/User/Checkout';
import Dashboard from './Pages/Admin/Dashboard';
import OrderList from './Pages/Admin/OrderList';
import Products from './Pages/Admin/Products';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchDataAsyc } from './Store/ProductSlice';
// import DetailProduct from './Pages/User/DetailProduct';
import { fetchUserAsych } from './Store/UserSlice';
import PrivateRoute from './Route/PrivateRoute';
import PrivateRouteAdmin from './Route/PrivateRouteAdmin';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataAsyc()), dispatch(fetchUserAsych());
  }, []);
  return (
    <>
      <Routes>
        {/* Bagian Admin */}
        <Route path="/admin" element={<LoginAdmin />} />
        <Route path="/dashboard" element={<PrivateRouteAdmin component={Dashboard} />} />
        <Route path="/admin/products" element={<PrivateRouteAdmin component={Products} />} />
        <Route path="/admin/orderList" element={<PrivateRouteAdmin component={OrderList} />} />

        {/* Bagian User */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<PrivateRoute component={Product} />} />
        <Route path="/ai_medicine" element={<PrivateRoute component={AiMedicine} />} />
        <Route path="/cart" element={<PrivateRoute component={Cart} />} />
        <Route path="/cart/checkout" element={<PrivateRoute component={Checkout} />} />
        {/* <Route path="/products/:nama" element={<PrivateRoute component={DetailProduct} />} /> */}

        {/* Page Not Found */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
