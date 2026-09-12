import { createSlice } from '@reduxjs/toolkit'


// this slicer in this slice we add state & actions

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    name: "Raj Nagar",
    number: 1
  },
  reducers: {
    
    Plus:(state)=>{
        return({...state,number:state.number+1})
    },
    Minus:(state)=>{
        return({...state,number:state.number-1})
    },
    Change:(state)=>{
        return({...state,name:"Addeeba Pathan"})
    }

  },
})

// Action creators are generated for each case reducer function
export const { Plus, Minus , Change} = cartSlice.actions

export default cartSlice.reducer