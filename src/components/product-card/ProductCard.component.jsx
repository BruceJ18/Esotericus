import { useContext } from "react";

import Button from "../button/button.component";

import { CartContext } from "../../contexts/cart.context";
import "./ProductCard.styles.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl, id } = product;
  const { addItemToCart } = useContext(CartContext);


  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={require(`../../assets/images/shop-images/image_${id}.jpg`)}  alt="product image and name" />

      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart} >Add to cart</Button>
    </div>
  );
};

export default ProductCard;
