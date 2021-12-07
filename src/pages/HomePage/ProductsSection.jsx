import classes from "./ProductsSection.module.css";

import speakerImage from "./../../assets/home/mobile/image-speaker-zx9.png";
import earphonesImage from "./../../assets/home/mobile/image-earphones-yx1.jpg";
import circlesIcon from "./../../assets/home/desktop/pattern-circles.svg";

import LinkButton from "../../components/LinkButton";

const ProductsSection = () => {
  return (
    <section className={classes["products-section"]}>
      <div className={classes["card-1"]}>
        <div className={classes.content}>
          <div className={classes["image-frame"]}>
            <img src={speakerImage} alt="ZX9 SPEAKER" />
          </div>
          <h3>ZX9 SPEAKER</h3>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <LinkButton to="/" type="tertiary">
            See Product
          </LinkButton>
        </div>
        <div className={classes["icon-frame"]}>
          <img src={circlesIcon} alt="" />
        </div>
      </div>
      <div className={classes["card-2"]}>
        <h4>ZX7 SPEAKER</h4>
        <LinkButton to="/" type="secondary">
          See Product
        </LinkButton>
      </div>
      <div className={classes["card-3"]}></div>
      <div className={classes["card-4"]}>
        <h4>YX1 EARPHONES</h4>
        <LinkButton to="/" type="secondary">
          See Product
        </LinkButton>
      </div>
    </section>
  );
};

export default ProductsSection;
