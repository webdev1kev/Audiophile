import classes from "./Features.module.css";
import InTheBox from "./InTheBox";

const Features = (props) => {
  return (
    <section className={classes["features-section"]}>
      <div className={classes.content}>
        <h5>Features</h5>
        {props.children}
      </div>

      <InTheBox />
    </section>
  );
};

export default Features;
