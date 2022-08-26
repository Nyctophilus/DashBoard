import { useRef } from "react";
import classes from "./Input.module.scss";

const Input = ({
  type,
  required,
  value,
  isValid,
  hasError,
  hasTouched,
  OnBlur,
  OnChange,
}) => {
  const inputRef = useRef();

  const activateInputHandler = () =>
    inputRef.current.focus();

  return (
    <div className={classes.Input}>
      <input
        type={type}
        required={required}
        value={value}
        onChange={OnChange}
        onBlur={OnBlur}
        className={hasError ? classes.inValid : ""}
        ref={inputRef}
      />
      <span
        className={hasTouched ? classes.Touched : ""}
        onClick={activateInputHandler}
      >
        {type}
      </span>
      {hasError && (
        <p className={classes.errorTxt}>
          {type === "username" &&
            "Username Must Contains Your last name.(>1, <4)"}

          {type === "email" &&
            " Email Must Be In Correct Format.(example@x.zz)"}

          {type === "password" &&
            "Password must be longer than 7 charctars.(>7)"}
        </p>
      )}
    </div>
  );
};

export default Input;
