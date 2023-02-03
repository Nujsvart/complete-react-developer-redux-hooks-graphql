import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cartIcon.styles.scss";

import { useContext } from "react";
import { DropdownContext } from "../../contexts/DropdownContext";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(DropdownContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
