import { useState, useEffect } from "react";
import { getProducts } from "../services";

/**
 * @description Custom Hook for get products
 * @returns {Array}
 */
export const useGetProducts = (limit) => {
    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
        getProducts(limit)
          .then((response) => {
            setProductsData(response.data.products)
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

      return { productsData }
}