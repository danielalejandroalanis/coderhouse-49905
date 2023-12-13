import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useGetProducts } from "./hooks/useProducts";
import UserData from "./components/UserData";

const App = () => {
  
  const { productsData } = useGetProducts(15);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <NavBar />
      {/* <ItemListContainer productsData={productsData} /> */}
      <UserData firstName="Benja" lastName="Garcia" age={20} birthdate="28/10/2003" myObject={
        {
          product: "Nuevo producto",
          quantity: "10"
        }
      } />
    </div>
  );
};

export default App;
