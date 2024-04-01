import { useState, useEffect } from 'react'
import  {CartContext}  from './Context/CartContext'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Data from './data.json'
import Home from './Pages/Home'
import Layout from './Layout/Layout'
import ProductList from './Pages/ProductList'
import ProductPage from './Pages/ProductPage'
import Checkout from './Pages/Checkout'




export default function App() {

  return (
   <BrowserRouter>
  
   <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="Products/:category" element={<ProductList products={Data} />} />
      <Route path="Product/:id" element={<ProductPage products={Data} />}  />
      <Route path="checkout" element={<Checkout />} />
    </Route>
    
    
    
    </Routes>
  
   </BrowserRouter>
  )
}


