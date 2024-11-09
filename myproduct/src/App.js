// src/App.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import CreateProduct from './components/CreateProduct';
import UpdateProduct from './components/UpdateProduct';
import  Product  from './components/GetProduct';
import './App.css';  

function App() {
    return (
        <div className="App">
            <h1>Product Management</h1>
            <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/create" element={<CreateProduct />} />
                <Route path="/update/:id" element={<UpdateProduct />} />
                <Route path="/get/:id" element={<Product />} /> 
            </Routes>
        </div>
    );
}

export default App;
