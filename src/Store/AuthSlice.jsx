import { createSlice } from '@reduxjs/toolkit';

const AuthSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: localStorage.getItem('isLogin') === 'true',
  },

  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
      localStorage.setItem('isLogin', 'true');
    },
  },
});

export const { login } = AuthSlice.actions;

export default AuthSlice.reducer;
