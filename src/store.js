import { configureStore } from '@reduxjs/toolkit'
import Product from './pages/Product'
import  productSlice  from './Components/Slice/productSlice'

export default configureStore({
  reducer: {
    Product: productSlice
  },
})