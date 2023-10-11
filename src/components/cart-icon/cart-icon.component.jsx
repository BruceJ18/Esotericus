import { useContext } from "react";

import { ReactComponent as ShopBagIcon } from "../../assets/images/logos/shopping-bag.svg";
import "./cart-icon.styles.scss";

import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
const {setIsCartOpen, isCartOpen} = useContext(CartContext);

const toggleCartOpen = () => {
    setIsCartOpen(!isCartOpen)
}

  return (
    <div className="cart-icon-container">
      <ShopBagIcon onClick={toggleCartOpen} className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;