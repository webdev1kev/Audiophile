import classes from "./HeroSection.module.css";

import LinkButton from "../../components/LinkButton";

const HeroSection = (props) => {
  return (
    <section className={classes["hero-section"]}>
      <header className={classes.header}>
        <p className={`${classes["overline"]} overline`}>New Product</p>
        <h1>XX99 Mark II Headphones</h1>

        <p className={`${classes.paragraph} paragraph`}>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <LinkButton to="/" type="primary">
          See Product
        </LinkButton>
      </header>
    </section>
  );
};

export default HeroSection;
