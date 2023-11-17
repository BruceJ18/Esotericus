import { useContext } from "react";

import { ReactComponent as ShopBagIcon } from "../../assets/images/logos/shopping-bag.svg";

import { CartContext } from "../../contexts/cart.context";

import {ShoppingBagIcon, CartIconContainer, ItemCount } from "./cart-icon.styles.jsx";


const CartIcon = () => {
const {setIsCartOpen, isCartOpen, cartCount} = useContext(CartContext);

const toggleCartOpen = () => {
    setIsCartOpen(!isCartOpen)
}

  return (
    <CartIconContainer>
      <ShoppingBagIcon onClick={toggleCartOpen}  />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
