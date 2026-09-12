
// https://react-redux.js.org/tutorials/quick-start


//Create a file named src/app/store.js. 

import { configureStore } from '@reduxjs/toolkit'
import cartSlice  from './features/cartSlice'

export default configureStore({
    // we all load codding file in this reducer
  reducer: {
    
    cart:cartSlice,


  },
})