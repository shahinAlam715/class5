import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
   cartItem: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) :[],
  },
  reducers: {
   addTocart: (state, action) => {
     
   let findiproduct = state.cartItem.findIndex((item)=>
      item.id == action.payload.id)
 
   if (findiproduct !== -1) {
    state.cartItem[findiproduct].quantity += 1
    localStorage.setItem("cart", JSON.stringify(state.cartItem))
   }else{
      state.cartItem = [...state.cartItem, action.payload]
       localStorage.setItem("cart", JSON.stringify(state.cartItem))
   }
   
   
    
        
    },

    
    increment: (state, action)=>{
      if (state.cartItem[action.payload].quantity < 10) {
         
         state.cartItem[action.payload].quantity += 1
          localStorage.setItem("cart", JSON.stringify(state.cartItem))
      }
    },
    decrement: (state, action)=>{
      if (state.cartItem[action.payload].quantity > 1) {
         
         state.cartItem[action.payload].quantity -= 1
          localStorage.setItem("cart", JSON.stringify(state.cartItem))
      }
    },
    productRemove: (state, action)=>{
            state.cartItem.splice(action.payload, 1)
            localStorage.setItem("cart", JSON.stringify(state.cartItem))
    }
   },
})


export const { addTocart, increment, decrement, productRemove } = productSlice.actions

export default productSlice.reducer