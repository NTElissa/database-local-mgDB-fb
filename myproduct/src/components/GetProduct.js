import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../apiService';

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const data = await getAllProducts();
                setProducts(data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchProducts();
    }, []);

    return (
        <div>
            {products.map(product => (
                <div key={product.id}>{product.name}</div>
            ))}
        </div>
    );
}
export default Products;
