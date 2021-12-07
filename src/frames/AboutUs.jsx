import classes from "./AboutUs.module.css";

import bestGearImage from "./../assets/shared/mobile/image-best-gear.jpg";

const AboutUs = () => {
  return (
    <section className={classes["about-us-section"]}>
      <div className={classes["image-frame"]}>
        <img src={bestGearImage} alt="Best Gear" />
      </div>
      <h4 className={classes.heading}>
        Bringing you the <span className={classes.highlight}>best</span> audio
        gear
      </h4>
      <p className={`${classes.paragraph} paragraph`}>
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </p>
    </section>
  );
};

export default AboutUs;
