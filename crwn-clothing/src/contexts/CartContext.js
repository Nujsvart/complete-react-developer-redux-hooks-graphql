import { createContext, useState, useEffect } from "react";
import "./shop-data.json";

const addCartItem = (cartItems, productToAdd) => {
  // find if cartItems contains productToAdd
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === productToAdd.id
  );

  // if found, icrement quantity
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];

  // return new arrey with modified cartItems/ new cart item
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const totalQuantity = cartItems.reduce(
      (acc, item) => acc + item.quantity,
      0
    );

    setCartCount(totalQuantity);
  }, [cartItems]);

  const addItemToCart = productToAdd => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
