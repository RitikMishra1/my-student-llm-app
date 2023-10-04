// src/api/api.js

import { API_URL } from '../config';  // Import API_URL from config.js

// Fetch all products
export const fetchAllProducts = async () => {
  try {
    const response = await fetch(`${API_URL}`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

// Fetch a single product by ID
export const fetchProductById = async (productId) => {
  try {
    const response = await fetch(`${API_URL}/${productId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch product');
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

// Create a new product
export const createProduct = async (product) => {
  try {
    const response = await fetch(`${API_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });
    if (!response.ok) {
      throw new Error('Failed to create product');
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};
