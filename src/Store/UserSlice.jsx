import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const UserSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
  },

  reducers: {
    getUser: (state, action) => {
      state.data = action.payload;
    },
    addUser: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

const { getUser, addUser } = UserSlice.actions;

const url = import.meta.env.VITE_APP_APIKEY_USER;

export const fetchUserAsych = () => async (dispatch) => {
  try {
    const response = await axios.get(url);
    const responseData = await response.data;
    dispatch(getUser(responseData));
  } catch (error) {
    console.log(error);
  }
};

export const createUserAsyc = (newUser) => async (dispatch) => {
  //   const url = `https://65127c2db8c6ce52b395afbb.mockapi.io/`;

  try {
    const response = await axios.post(url, newUser);
    const responseData = await response.data;
    dispatch(addUser(responseData));
  } catch (error) {
    console.log(error);
  }
};

export default UserSlice.reducer;
