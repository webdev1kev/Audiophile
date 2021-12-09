import classes from "./RelatedProducts.module.css";

import LinkButton from "../components/LinkButton";

export const RelatedProduct = (props) => {
  return (
    <div className={classes["related-products"]}>
      <div className={classes["image-frame"]}>
        <img src={props.image} alt={props.alt} />
      </div>
      {props.children}
      <LinkButton to={props.link} type="primary">
        See Product
      </LinkButton>
    </div>
  );
};

export const RelatedProducts = (props) => {
  return (
    <section className={classes["related-products-section"]}>
      <h5>You May Also Like</h5>
      <h5>{props.children}</h5>
    </section>
  );
};
