import { Fragment } from "react";

import classes from "./CategoryPage.module.css";

import LinkButton from "../../components/LinkButton";
import headphoneMobile from "./../../assets/product-xx59-headphones/mobile/image-product.jpg";

const CategoryPage = () => {
  return (
    <Fragment>
      <h4 className={classes.heading}>Headphones</h4>
      <section className={classes["product-section"]}>
        <div className={classes["image-frame"]}>
          <img src={headphoneMobile} alt="Headphone" />
        </div>
        <p className="overline">New Product</p>
        <ul className={classes.products}>
          <li className={classes.item}>
            <h4>XX99 Mark II Headphones</h4>
            <p className="paragraph">
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
            <LinkButton to="/" type="primary">
              See Product
            </LinkButton>
          </li>
        </ul>
      </section>

      <section className={classes["product-section"]}>
        <div className={classes["image-frame"]}>
          <img src={headphoneMobile} alt="Headphone" />
        </div>
        <p className="overline">New Product</p>
        <ul className={classes.products}>
          <li className={classes.item}>
            <h4>XX99 Mark II Headphones</h4>
            <p className="paragraph">
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
            <LinkButton to="/" type="primary">
              See Product
            </LinkButton>
          </li>
        </ul>
      </section>
    </Fragment>
  );
};

export default CategoryPage;
