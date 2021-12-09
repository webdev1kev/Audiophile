import classes from "./Gallery.module.css";

import image1 from "./../assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg";
import image2 from "./../assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg";
import image3 from "./../assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg";

const Gallery = (props) => {
  return (
    <section className={classes["gallery-section"]}>
      <div className={classes.gallery}>
        <div className={classes["image-frame"]}>
          <img src={image1} alt="" />
        </div>
        <div className={classes["image-frame"]}>
          <img src={image2} alt="" />
        </div>
        <div className={classes["image-frame"]}>
          <img src={image3} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
