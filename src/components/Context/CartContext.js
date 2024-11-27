import { createContext, useState } from "react";
import productsData from "../Main/Cart/productsData";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState(productsData);
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <CartContext.Provider
      value={{ cartItem, setCartItem, totalPrice, setTotalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContextProvider };
export default CartContext;
