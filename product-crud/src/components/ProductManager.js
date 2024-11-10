// src/components/ProductManager.js
import React, { useState, useEffect } from 'react';
import { getAllProducts, deleteProduct } from '../api/productAPI';
import ProductList from './ProductList';
import ProductForm from './ProductForm';

function ProductManager() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const { data } = await getAllProducts();
      setProducts(data.data);
    } catch (error) {
      console.error('Error loading products:', error);
    }
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    loadProducts();
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  return (
    <div>
      <h1>Product Manager</h1>
      <ProductForm onSuccess={loadProducts} editingProduct={editingProduct} setEditingProduct={setEditingProduct} />
      <ProductList products={products} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
}

export default ProductManager;
