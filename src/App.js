import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import ProductsContainer from './containers/ProductsContainer';
import ProductContainer from './containers/ProductContainer';
import NewProductContainer from './containers/NewProductContainer';

const RenderProductNewContainer = () => <h1>Product New Container</h1>
const ProductContainerEdit = () => <b>Es edición</b>

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeContainer/>} />
        <Route path="/products" element={<ProductsContainer />} />
        <Route path="/products/:sku" element={<ProductContainer />}/>
        <Route path="/products/:sku/edit" element={<ProductContainer />} />
        <Route path="/products/:sku/del" element={<ProductContainer />} />
        <Route path="/products/new" element={<NewProductContainer />} />
      </Routes>
    </div>
  );
}

export default App;
