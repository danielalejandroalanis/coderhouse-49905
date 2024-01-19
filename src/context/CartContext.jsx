import { createContext, useState } from "react";

//1ero Crear el contexto
export const CartContext = createContext();

//2do Crear el provider
export const CartProvider = ({children}) => {
  const [count, setCount] = useState([]);
  
  //3ero Creacion del proveedor y pasaje de valores (value)
  return (
    <CartContext.Provider value={{ count, setCount }}>
      { children }
    </CartContext.Provider>
  );
};
