// src/components/ProductCard.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteProduct } from '../apiService'; 

const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            await deleteProduct(product._id);
            alert("Product deleted successfully");
            navigate("/"); 
        } catch (error) {
            alert("Error deleting product");
        }
    };

    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={() => navigate(`/update/${product._id}`)}>Update</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default ProductCard;
