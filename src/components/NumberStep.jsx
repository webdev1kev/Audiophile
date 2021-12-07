import classes from "./NumberStep.module.css";

const NumberStep = (props) => {
  return (
    <div className={classes["number-step"]}>
      <button className={classes.minus}>-</button>
      <p className={classes.number}>1</p>
      <button className={classes.plus}>+</button>
    </div>
  );
};

export default NumberStep;
