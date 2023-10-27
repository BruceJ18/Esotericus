import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import "./checkout.styles.scss";

const CheckOut = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <h1>I am the one</h1>

      <div>
        {cartItems.map((cartItem) => {
          const { name, quantity, id } = cartItem;

          return (
            <div key={id}>
              <h2>{name}</h2>
              <span>{quantity}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CheckOut;
