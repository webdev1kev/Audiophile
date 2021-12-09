import classes from "./RelatedProduct.module.css";

import LinkButton from "../components/LinkButton";

const RelatedProduct = (props) => {
  return (
    <div className={classes["related-product"]}>
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

export default RelatedProduct;
