import classes from "./Button_Link.module.css";

const Button = (props) => {
  return (
    <button
      className={`${classes[props.type]} ${props.className}`}
      onClick={() => {
        props.onClick();
      }}
    >
      {props.children}
    </button>
  );
};

export default Button;
