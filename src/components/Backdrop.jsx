import { createPortal } from "react-dom";

import classes from "./Backdrop.module.css";

const backdrop = document.getElementById("backdrop");

const Backdrop = (props) => {
  return createPortal(
    <div className={`${classes.backdrop} ${props.className}`}></div>,
    backdrop
  );
};

export default Backdrop;
