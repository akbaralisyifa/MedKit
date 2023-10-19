import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const ProductSlice = createSlice({
  name: 'products',
  initialState: {
    data: [],
  },

  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = ProductSlice.actions;

export const fetchData = () => async (dispatch) => {
  const api = 'https://65127c2db8c6ce52b395afbb.mockapi.io/obat';
  try {
    const response = await axios.get(api);
    const responseData = await response.data;
    dispatch(setData(responseData));
  } catch (error) {
    console.log(error);
  }
};

export default ProductSlice.reducer;
