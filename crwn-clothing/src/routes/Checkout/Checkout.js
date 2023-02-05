import "./checkout.styles.scss";

import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const Checkout = () => {
  const { cartItems, cartCount, addItemToCart, removeItemFromCart } = useContext(CartContext);
  return (
    <div>
      <h1>checkout page</h1>
      <div>
        {cartItems.map(item => (
          <div key={item.id}>
            <h2>{item.name}</h2>
                <span>{item.quantity}</span>
                <span onClick={() => removeItemFromCart(item)}>decrement</span>
                <span onClick={() => addItemToCart(item)
                }>increment</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checkout;
