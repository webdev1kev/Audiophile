import { Fragment, useState } from "react";

import classes from "./Navbar.module.css";


import hamburgerMenu from "./../assets/shared/tablet/icon-hamburger.svg";
import cartIcon from "./../assets/shared/desktop/icon-cart.svg";
import logo from "./../assets/shared/desktop/logo.svg";


import Backdrop from "../components/Backdrop";
import NavMenuItems from "./NavMenuItems";

const MobileNavMenu = (props) => {
  const active = props.active ? classes.active : undefined;

  return (
    <ul className={`${classes["mobile-menu"]} ${active}`}>
      {active && <Backdrop />}
      <NavMenuItems />
    </ul>
  );
};

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <Fragment>
      <nav className={classes.navbar}>
        <div className={classes["hamburger-frame"]}>
          <img
            src={hamburgerMenu}
            alt="Hamburger Menu Icon"
            onClick={() => {
              setMenuActive(!menuActive);
            }}
          />
        </div>
        <div className={classes["logo-frame"]}>
          <img src={logo} alt="Logo" />
        </div>
        <div className={classes["cart-frame"]}>
          <img src={cartIcon} alt="Cart Icon" />
        </div>
      </nav>
      <MobileNavMenu active={menuActive} />
    </Fragment>
  );
};

export default Navbar;
