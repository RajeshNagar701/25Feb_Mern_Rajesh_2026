import { configureStore } from '@reduxjs/toolkit'
import  categorySlice  from './categorySlice'
import  productSlice  from './productSlice'

export default configureStore({
  reducer: {
    category:categorySlice,
    product:productSlice
  },
})