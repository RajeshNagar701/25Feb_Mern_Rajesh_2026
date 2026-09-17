import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const add_category = createAsyncThunk('add_category', (obj) => {
  const res = axios.post(`http://localhost:3000/category`, obj);
  return res;
})

export const del_category = createAsyncThunk('del_category', (id) => {
  const res = axios.delete(`http://localhost:3000/category/${id}`);
  return res;
})

export const upd_category = createAsyncThunk('upd_category', (obj) => {
  const res = axios.patch(`http://localhost:3000/category/${obj.id}`, obj);
  return res;
})

export const get_category = createAsyncThunk('get_category', async () => {
  const res = await axios.get(`http://localhost:3000/category`);
  return res.data;
})

export const categorySlice = createSlice({
  name: 'category',
  initialState: {
    cate_arr: [],
  },
  reducers: {

  },
  extraReducers:
    (builder) => {
      builder.addCase(get_category.fulfilled, (state, action) => {
        state.cate_arr = action.payload;
      })
    }

})

// Action creators are generated for each case reducer function
export const { } = categorySlice.actions
export default categorySlice.reducer