// src/components/CreateProduct.js

import React, { useState } from 'react';
import { createProduct } from '../apiService'; 

const CreateProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const productData = { name, price, description, image };
        try {
            await createProduct(productData);
            alert('Product created successfully');
        } catch (error) {
            alert('Error creating product');
        }
    };

    return (
        <div className="create-product-container">
            <form onSubmit={handleSubmit}>
                <h2>Create Product</h2>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Product Name"
                />
                <label>Price:</label>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Price"
                />
                <label>Description:</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Product Description"
                />
                <label>Image URL:</label>
                <input
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    placeholder="Image URL"
                />
                <button type="submit">Create Product</button>
            </form>
        </div>
    );
};

export default CreateProduct;
