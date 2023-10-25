import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const ProductSlice = createSlice({
  name: 'products',
  initialState: {
    data: [],
    // updateData: null,
  },

  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    addData: (state, action) => {
      state.data.push(action.payload);
    },
    updateData: (state, action) => {
      const updateProduct = action.payload;
      const index = state.data.findIndex((product) => product.id === updateProduct.id);
      if (index !== -1) {
        state.data[index] = updateProduct;
      }
    },
    deleteData: (state, action) => {
      state.data = state.data.filter((product) => product.id !== action.payload);
    },
    setEditProduct: (state, action) => {
      state.updateData = action.payload; // Aksi ini akan mengatur produk yang akan diedit
    },
  },
});

export const { setData, addData, updateData, deleteData, setEditProduct } = ProductSlice.actions;

export const fetchDataAsyc = () => async (dispatch) => {
  const api = 'https://65127c2db8c6ce52b395afbb.mockapi.io/obat';
  try {
    const response = await axios.get(api);
    const responseData = await response.data;
    dispatch(setData(responseData));
  } catch (error) {
    console.log(error);
  }
};

export const createDataAsyc = (newProduct) => async (dispatch) => {
  const api = 'https://65127c2db8c6ce52b395afbb.mockapi.io/obat';

  try {
    const response = await axios.post(api, newProduct);
    const responseData = await response.data;
    dispatch(addData(responseData));
  } catch (error) {
    console.log(error);
  }
};

export const updateDataAsyc = (updateProduct) => async (dispatch) => {
  const api = `https://65127c2db8c6ce52b395afbb.mockapi.io/obat/${updateProduct.id}`;

  try {
    await axios.put(api, updateProduct);
    dispatch(updateData(updateProduct));
  } catch (error) {
    console.log(error);
  }
};

export const deleteDataAsyc = (id) => async (dispatch) => {
  const api = `https://65127c2db8c6ce52b395afbb.mockapi.io/obat/${id}`;

  try {
    await axios.delete(api);
    dispatch(deleteData(id));
  } catch (error) {
    console.log();
  }
};

export default ProductSlice.reducer;
