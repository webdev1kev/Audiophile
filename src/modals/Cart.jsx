import { createPortal } from "react-dom";
import { Fragment } from "react";

import classes from "./Cart.module.css";

import Button from "./../components/Button";
import LinkButton from "./../components/LinkButton";
import NumberStep from "../components/NumberStep";
import productThumbnail from "./../assets/cart/image-xx99-mark-two-headphones.jpg";
import Backdrop from "../components/Backdrop";

const CartItem = () => {
  return (
    <li className={classes.item}>
      <div className={classes["image-frame"]}>
        <img src={productThumbnail} alt="" />
      </div>
      <div className={classes["product-description"]}>
        <p className={classes.name}>XX99 MKII</p>
        <p className={classes.price}>$ 3,000</p>
      </div>
      <NumberStep className={classes["number-step"]} />
    </li>
  );
};

const Cart = () => {
  return (
    <section className={classes["cart-section"]}>
      <div className={classes.cart}>
        <div className={classes["cart-heading"]}>
          <h6>Cart (3)</h6>
          <Button>Remove all</Button>
        </div>
        <ul className={classes["cart-items"]}>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </ul>
        <div className={classes["total-box"]}>
          <p>Total</p>
          <p className={classes.total}>$ 3000</p>
        </div>
        <LinkButton to={"/"} type="primary">
          Checkout
        </LinkButton>
      </div>
    </section>
  );
};

const modal = document.getElementById("modal");
const CartModal = () => {
  return (
    <Fragment>
      <Backdrop />
      {createPortal(<Cart />, modal)}
    </Fragment>
  );
};

export default CartModal;
