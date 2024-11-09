// src/apiService.js

const API_URL = 'http://localhost:8000/api/products'; 

// Get all products
export const getAllProducts = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Failed to fetch products');
    return response.json();
};
// console.log(getAllProducts());

// Get a single product by ID
export const getProduct = async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) throw new Error('Failed to fetch product');
    return response.json();
};

// Create a new product
export const createProduct = async (productData) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productData),
    });
    if (!response.ok) throw new Error('Failed to create product');
    return response.json();
};

// Update a product by ID
export const updateProduct = async (id, productData) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productData),
    });
    if (!response.ok) throw new Error('Failed to update product');
    return response.json();
};

// Delete a product by ID
export const deleteProduct = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    if (!response.ok) throw new Error('Failed to delete product');
};
