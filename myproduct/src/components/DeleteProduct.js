// src/components/DeleteProduct.js
import React from 'react';
import { deleteProduct } from '../apiService';

const DeleteProduct = ({ id }) => {
    const handleDelete = async () => {
        await deleteProduct(id);
        alert('Product deleted successfully');
    };

    return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteProduct;
