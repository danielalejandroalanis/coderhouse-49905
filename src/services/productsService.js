import axios from "axios";

/**
 * @name getProducts
 * @description Get products from dummyjson API
 * @param {number} limit
 * @default limit [10]
 * @returns {Promise}
 */
export async function getProducts(limit = 10) {
  return await axios.get(`https://dummyjson.com/products?limit=${limit}`);
}

export async function getProductById(id = 1) {
  return await axios.get(`https://dummyjson.com/products/${id}`);
}

export async function getCategories() {
  return await axios.get('https://dummyjson.com/products/categories');
}

export async function getProductsByCategory(id = 'smartphones') {
  return await axios.get(`https://dummyjson.com/products/category/${id}`);
}
