import { useContext } from "react";

import { BUTTON_TYPE } from "../button/button.component";
import Button from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";

import "./ProductCard.styles.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={require(`../../${imageUrl}`)} alt="product image and name" />

      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType={BUTTON_TYPE.inverted} onClick={addProductToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
