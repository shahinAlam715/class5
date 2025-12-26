import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Product from "./pages/Product"
import Rootlayout from "./Components/Rootlayout"
import ProductDetails from "./pages/ProductDetails"
import Cart from "./pages/Cart"
import Error from "./pages/Error"
import Checkout from "./pages/Checkout"
import Singup from "./pages/Singup"
import Login from "./pages/Login"


let router = createBrowserRouter(createRoutesFromElements(

  <>
  <Route element={<Rootlayout/>}>
      <Route index element={<Home/>}></Route>
      <Route path="/product" element={<Product/>}></Route> 
      <Route path="/product/:id" element={<ProductDetails/>}></Route>
      <Route path="/productdetails" element={<ProductDetails/>}></Route> 
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/Checkout" element={<Checkout/>}></Route>
      <Route path="/singup" element={<Singup/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
  </Route>
      <Route path="*" element={<Error/>}></Route>
  </>

))

function App() {
  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
