import { useContext } from "react";
import "./CartWidget.css";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { count } = useContext(CartContext);

  const totalQuantity = count.reduce((total, item) => total + item.quantity, 0);

  return (
    <Link to="/cart">
      <div className="cartWidgetContainer">
        🛒
        <span style={{ fontWeight: "bold", fontSize: "1.3rem" }}>
          {totalQuantity}
        </span>
      </div>
    </Link>
  );
};

export default CartWidget;
