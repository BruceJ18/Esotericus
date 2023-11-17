import { Fragment, useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import { Outlet, Link } from "react-router-dom";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { default as SunMoon } from "../../assets/images/logos/allseeingeye.png";
import {NavContainer, NavLink, NavLinks, LogoContainer} from "./nav.styles";
import { UserContext } from "../../contexts/user.context";

const Nav = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavContainer>
        <LogoContainer to="/">
          <img
            src={SunMoon}
            alt="store logo of all seeing eye"
            className="logo"
            width={100}
            height={100}
          />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <NavLink to="/auth">
              SIGN IN
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavContainer>

      <Outlet />
    </Fragment>
  );
};

export default Nav;
