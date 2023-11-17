import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { name, price, quantity, id } = cartItem;
  return (
    <div className="cart-item-container">
      <img
        src={require(`../../assets/images/shop-images/image_${id}.jpg`)}
        alt={name}
      />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">${price * quantity}</span>
      </div>
    </div>
  );
};

export default CartItem;
