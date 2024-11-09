// src/components/ProductList.js

import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../apiService'; 
import ProductCard from './ProductCard';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productList = await getAllProducts();
                setProducts(productList);
            } catch (error) {
                console.error("Error fetching products", error);
            }
        };
        
        fetchProducts();
    }, []); 

    return (
        <div>
            <h2>Product List</h2>
            <div className="product-list">
                {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
