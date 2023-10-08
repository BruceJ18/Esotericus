import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import "./nav.styles.scss";
import { default as SunMoon } from "../../assets/images/logos/allseeingeye.png";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Nav = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <div className="nav">
        <Link className="logo-container" to="/">
          <img
            src={SunMoon}
            alt="store logo of all seeing eye"
            className="logo"
            width={100}
            height={100}
          />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>

          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Nav;
