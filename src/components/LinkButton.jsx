import { Link } from "react-router-dom";

import classes from "./Button_Link.module.css";

import iconArrowRight from "./../assets/shared/desktop/icon-arrow-right.svg";

const LinkButton = (props) => {
  return (
    <Link to={props.to} className={classes[props.type]}>
      {props.children}
      {props.type === "arrow" && (
        <div className={classes["icon-frame"]}>
          <img src={iconArrowRight} alt="Arrow Path Icon" />
        </div>
      )}
    </Link>
  );
};

export default LinkButton;
