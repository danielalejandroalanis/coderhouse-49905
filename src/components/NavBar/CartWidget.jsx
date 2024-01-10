import { useContext } from "react";
import "./CartWidget.css";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { count } = useContext(CartContext);

  console.log(count)
  return (
    <div className="cartWidgetContainer">
      🛒
      {/* <span style={{ fontWeight: "bold", fontSize: "1.3rem" }}>{count}</span> */}
    </div>
  );
};

export default CartWidget;
