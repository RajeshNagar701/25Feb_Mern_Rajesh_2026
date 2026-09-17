import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const add_product = createAsyncThunk('add_product', (obj) => {
  const res = axios.post(`http://localhost:3000/product`, obj);
  return res;
})

export const del_product = createAsyncThunk('del_product', (id) => {
  const res = axios.delete(`http://localhost:3000/product/${id}`);
  return res;
})

export const upd_product = createAsyncThunk('upd_product', (obj) => {
  const res = axios.patch(`http://localhost:3000/product/${obj.id}`, obj);
  return res;
})

export const get_product = createAsyncThunk('get_product', async () => {
  const res = await axios.get(`http://localhost:3000/product`);
  return res.data;
})

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    prod_arr: [],
  },
  reducers: {

  },
  extraReducers:
    (builder) => {
      builder.addCase(get_product.fulfilled, (state, action) => {
        state.prod_arr = action.payload;
      })
    }

})

// Action creators are generated for each case reducer function
export const { } = productSlice.actions
export default productSlice.reducer