// import { useEffect } from "react";
import ItemListContainer from "../components/ItemListContainer";
import { useGetProducts } from "../hooks/useProducts";
export const Home = () => {
  const { productsData } = useGetProducts('products');
  // useEffect(() => {
  //   const myDiv = document.getElementById("root");
  //   myDiv.addEventListener("click", () => {
  //     console.log("clicking");
  //   });

  //   document.addEventListener("click", () => {
  //     console.log("scrolling");
  //   });

  //   return () => {
  //     myDiv.removeEventListener("click", () => {
  //       console.log("clicking");
  //     });
  //     document.removeEventListener("click", () => {
  //       console.log("scrolling");
  //     });
  //   };
  // });

  return <ItemListContainer productsData={productsData} />;
};
