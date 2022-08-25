import classes from "./Button.module.scss";

const Button = ({ children, onClick, disabled }) => {
  return (
    <button
      className={classes.Button}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
