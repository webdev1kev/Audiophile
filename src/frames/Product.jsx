import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./Product.module.css";

import LinkButton from "../components/LinkButton";
import Button from "./../components/Button";
import NumberStep from "../components/NumberStep";

const Product = (props) => {
  const productDetailClass = props.productDetail
    ? classes["product-detail"]
    : undefined;

  const navigate = useNavigate();

  return (
    <Fragment>
      <section className={`${classes["product-section"]} `}>
        {props.productDetail && (
          <Button
            className={classes["go-back"]}
            type="go-back"
            onClick={() => {
              navigate(-1);
            }}
          >
            Go Back
          </Button>
        )}
        <div className={classes["image-frame"]}>
          <img src={props.image} alt={props.alt} />
        </div>
        {props.newProduct && (
          <p className={`${classes.overline} ${productDetailClass} overline`}>
            New Product
          </p>
        )}
        <ul className={`${classes.products} ${productDetailClass}`}>
          <li className={classes.item}>
            {props.children}
            {props.productDetail && <h6>$ {props.price}</h6>}
            {props.productDetail && (
              <div className={classes["button-container"]}>
                <NumberStep />
                <Button type="primary">Add to Cart</Button>
              </div>
            )}

            {!props.productDetail && (
              <LinkButton to={props.link} type="primary">
                See Product
              </LinkButton>
            )}
          </li>
        </ul>
      </section>
    </Fragment>
  );
};

export default Product;
