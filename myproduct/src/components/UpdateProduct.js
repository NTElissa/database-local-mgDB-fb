// src/components/UpdateProduct.js

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProduct, updateProduct } from '../apiService';

const UpdateProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({ name: '', price: '', description: '', image: '' });

    useEffect(() => {
        const fetchProduct = async () => {
            const productData = await getProduct(id);
            setProduct(productData);
        };

        fetchProduct();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateProduct(id, product);
            alert('Product updated successfully');
            navigate('/');
        } catch (error) {
            alert('Error updating product');
        }
    };

    return (
        <div className="update-product-container">
            <form onSubmit={handleSubmit}>
                <h2>Update Product</h2>
                <label>Name:</label>
                <input
                    type="text"
                    value={product.name}
                    onChange={(e) => setProduct({ ...product, name: e.target.value })}
                />
                <label>Price:</label>
                <input
                    type="number"
                    value={product.price}
                    onChange={(e) => setProduct({ ...product, price: e.target.value })}
                />
                <label>Description:</label>
                <textarea
                    value={product.description}
                    onChange={(e) => setProduct({ ...product, description: e.target.value })}
                />
                <label>Image URL:</label>
                <input
                    type="text"
                    value={product.image}
                    onChange={(e) => setProduct({ ...product, image: e.target.value })}
                />
                <button type="submit">Update Product</button>
            </form>
        </div>
    );
};

export default UpdateProduct;
