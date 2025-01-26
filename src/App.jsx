import React from 'react'
import Card from './Components/Card/Card'
import {Data} from "./data"
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import ProductsPage from './Components/ProductsPage/ProductsPage'
import SingleProduct from './Components/SingleProduct/SingleProduct'

const App = () => {
  return (
    <div className="main">
      <Routes>
      <Route path='/' element={<ProductsPage />}/>
        <Route path='/products' element={<ProductsPage />}/>
        <Route path='/singleproduct/:id' element={<SingleProduct />}/>
      </Routes>
    </div>
  )
}

export default App