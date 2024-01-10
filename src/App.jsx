import "bootstrap/dist/css/bootstrap.min.css";
import MainRouter from "./router/MainRouter";
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <CartProvider>
        <MainRouter />
      </CartProvider>
    </div>
  );
};

export default App;
