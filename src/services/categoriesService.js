import axios from "axios";

export async function getCategories() {
  return await axios.get(`https://dummyjson.com/products/categories`);
}
