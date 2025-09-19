import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Product from "./pages/Product"
import Rootlayout from "./Components/Rootlayout"
import ProductDetails from "./pages/ProductDetails"


let router = createBrowserRouter(createRoutesFromElements(

  <Route element={<Rootlayout/>}>
      <Route index element={<Home/>}></Route>
      <Route path="/product" element={<Product/>}></Route> 
      <Route path="/product/:id" element={<ProductDetails/>}></Route>
  </Route>

))

function App() {
  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
