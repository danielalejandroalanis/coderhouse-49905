import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";

const ItemCount = ({ productId }) => {
  const [countItem, setCountItem] = useState(1);

  const { count, setCount } = useContext(CartContext);

  const handleAdd = () => {
    setCountItem(countItem + 1);
  };

  const handleRemove = () => {
    setCountItem(countItem - 1);
  };

  const handleAddProductToCart = () => {
    const productExists = count.find((item) => item.id === productId);

    if (productExists) {
      setCount(
        count.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + countItem }
            : item
        )
      );
    } else {
      setCount([...count, { id: productId, quantity: countItem }]);
    }

    setCountItem(1);
  };

  return (
    <div>
      <div
        style={{
          width: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "auto",
        }}
      >
        <Button onClick={handleRemove}>-</Button>
        <span>{countItem}</span>
        <Button onClick={handleAdd}>+</Button>
      </div>
      <Button onClick={handleAddProductToCart}>Agregar al Carrito</Button>
    </div>
  );
};

export default ItemCount;
