import { configureStore } from '@reduxjs/toolkit';
import ProductSlice from './ProductSlice';
import UserSlice from './UserSlice';

const store = configureStore({
  reducer: {
    products: ProductSlice,
    users: UserSlice,
  },
});

export default store;
