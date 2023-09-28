import "./button.styles.scss";

const Button_TYPE = {
  inverted: "inverted",
  google: "google-sign-in",
};

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${Button_TYPE[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
