import { configureStore } from '@reduxjs/toolkit';
import ProductSlice from './ProductSlice';
import UserSlice from './UserSlice';
import AuthSlice from './AuthSlice';

const store = configureStore({
  reducer: {
    products: ProductSlice,
    users: UserSlice,
    auth: AuthSlice,
  },
});

export default store;
