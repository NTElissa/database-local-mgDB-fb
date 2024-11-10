// src/components/ProductForm.js
import React, { useState, useEffect } from 'react';
import { createProduct, updateProduct } from '../api/productAPI';

function ProductForm({ onSuccess, editingProduct, setEditingProduct }) {
  const [formData, setFormData] = useState({ name: '', price: '', description: '', image: '' });

  useEffect(() => {
    if (editingProduct) {
      setFormData(editingProduct);
    }
  }, [editingProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingProduct) {
      await updateProduct(editingProduct._id, formData);
      setEditingProduct(null);
    } else {
      await createProduct(formData);
    }
    setFormData({ name: '', price: '', description: '', image: '' });
    onSuccess();
  };

  return (
    <div>
      <h2>{editingProduct ? 'Edit Product' : 'Create Product'}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />
        <button type="submit">{editingProduct ? 'Update Product' : 'Create Product'}</button>
      </form>
    </div>
  );
}

export default ProductForm;
