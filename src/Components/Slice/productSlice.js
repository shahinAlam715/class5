import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
   cartItem: [],
  },
  reducers: {
   addTocart: (state, action) => {
     
   let findiproduct = state.cartItem.findIndex((finditem)=>
      finditem.id == action.payload.id)
 
   if (findiproduct !== -1) {
    state.cartItem[findiproduct].quantity += 1
   }else{
      state.cartItem = [...state.cartItem, action.payload]
   }
   
   
    
        
    },
   
  },
})


export const { addTocart } = productSlice.actions

export default productSlice.reducer