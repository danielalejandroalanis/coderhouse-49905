import { useEffect, useState } from "react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

import { getProducts } from "./services";

const App = () => {
  const [productsData, setProductsData] = useState([]);
  
  useEffect(() => {
    getProducts()
      .then((response) => {
        setProductsData(response.data.products)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <NavBar />
      <ItemListContainer productsData={productsData} />
    </div>
  );
};

export default App;
