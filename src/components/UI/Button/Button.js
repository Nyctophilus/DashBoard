import classes from "./Button.module.scss";

const Button = ({ children, onClick }) => {
  return (
    <button className={classes.Button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
