import classes from "./InTheBox.module.css";

const InTheBox = () => {
  return (
    <div className={classes["in-the-box"]}>
      <h5>In The Box</h5>
      <ul className={classes["item-list"]}>
        <li className={classes.item}>
          <span className={classes.quantity}>1x</span> Headphone Unit
        </li>
        <li className={classes.item}>
          <span className={classes.quantity}>2x</span> Replacement Earcups
        </li>
        <li className={classes.item}>
          <span className={classes.quantity}>1x</span> User Manual
        </li>
        <li className={classes.item}>
          <span className={classes.quantity}>1x</span> 3.5mm 5m audio Cable
        </li>
        <li className={classes.item}>
          <span className={classes.quantity}>1x</span> Travel Bag
        </li>
      </ul>
    </div>
  );
};

export default InTheBox;
