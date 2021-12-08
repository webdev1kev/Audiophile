import classes from "./Products.module.css";

import headphonesMobile from "./../assets/product-xx59-headphones/mobile/image-product.jpg";

import LinkButton from "../components/LinkButton";
import { Link } from "react-router-dom";

const Product = (props) => {
  return (
    <section>
      <div className={classes["image-frame"]}>
        {props.newProduct && <p className="overline">New Product</p>}
        <img src={headphonesMobile} alt={props.alt} />
        <h4>XX99 Mark II Headphones</h4>
        <p>
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
        <LinkButton type="primary">See Product</LinkButton>
      </div>
    </section>
  );
};

export default Product;
