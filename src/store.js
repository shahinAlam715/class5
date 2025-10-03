import { configureStore } from '@reduxjs/toolkit'
import  productSlice  from './Components/Slice/productSlice'

export default configureStore({
  reducer: {
    product: productSlice
  },
})