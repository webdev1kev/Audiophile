import classes from "./Gallery.module.css";

const Gallery = (props) => {
  return (
    <section className={classes["gallery-section"]}>
      <ul className={classes.gallery}>
        {props.images.map((image, i) => {
          return (
            <li key={i} className={classes["image-frame"]}>
              <img src={image} alt="Gallery Photo" />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Gallery;
