import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/UI/Button/Button";
import Input from "../components/UI/Input/Input";
import Logo from "../components/UI/Logo/Logo";
import { signin, signup } from "../hooks/LoginAPI";
import useValidate from "../hooks/use-validate";
import { login } from "../store/login-slice";
import classes from "./Login.module.scss";

const usernameValidation = (v) =>
  v.split(" ").length === 2 || v.split(" ").length === 3;

const emailValidation = (v) =>
  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v);

const passwordValidation = (v) => v.length > 7;

const Login = () => {
  const [haveAccount, setHaveAccount] = useState(true);
  const [isCheck, setIsCheck] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isRegister = !!useLocation().search.slice(
    useLocation().search.indexOf("=") + 1
  );
  useEffect(() => {
    if (isRegister) setHaveAccount(false);
  }, [isRegister]);

  const formToggleHandler = () =>
    setHaveAccount((prev) => !prev);

  const checkToggleHandler = () =>
    setIsCheck((prev) => !prev);

  const usernameValidator = useValidate(usernameValidation);
  const emailValidator = useValidate(emailValidation);
  const passwordValidator = useValidate(passwordValidation);

  let formIsValid = false;
  if (haveAccount) {
    if (emailValidator.isValid && passwordValidator.isValid)
      formIsValid = true;
  } else {
    if (
      usernameValidator.isValid &&
      emailValidator.isValid &&
      passwordValidator.isValid
    )
      formIsValid = true;
  }

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (haveAccount) {
      if (
        !emailValidator.isValid ||
        !passwordValidator.isValid
      )
        return;
    } else {
      if (
        !usernameValidator.isValid ||
        !emailValidator.isValid ||
        !passwordValidator.isValid
      )
        return;
    }

    if (!haveAccount) {
      signup({
        username: usernameValidator.value,
        email: emailValidator.value,
        password: passwordValidator.value,
      })
        .then(({ data, expTime }) =>
          dispatch(
            login({
              token: data.idToken,
              expTime: expTime.toISOString(),
            })
          )
        )
        .then((_) => {
          navigate("/");
        });
    }

    if (haveAccount)
      signin({
        email: emailValidator.value,
        password: passwordValidator.value,
      })
        .then(({ data, expTime }) =>
          dispatch(
            login({
              token: data.idToken,
              expTime: expTime.toISOString(),
            })
          )
        )
        .then((_) => {
          navigate("/");
        });

    usernameValidator.OnReset();
    emailValidator.OnReset();
    passwordValidator.OnReset();
  };

  return (
    <main className={classes.LoginPage}>
      <section>
        <Logo collapse />
        <h1>
          {haveAccount
            ? "Welcome to Materio! 👋🏻"
            : "Adventure starts here 🚀"}
        </h1>
        <p className="lightText">
          {haveAccount
            ? "Please sign-in to your account and start the adventure"
            : "Make your app management easy and fun!"}
        </p>

        <form onSubmit={submitFormHandler}>
          {!haveAccount && (
            <Input
              type={"username"}
              required
              {...usernameValidator}
            />
          )}

          <Input
            type={"email"}
            required
            {...emailValidator}
          />
          <Input
            type={"password"}
            required
            {...passwordValidator}
          />

          <div className={classes.formtail}>
            <div onClick={checkToggleHandler}>
              <span
                className={isCheck ? classes.checked : ""}
              ></span>
              {haveAccount ? (
                <p>remember me</p>
              ) : (
                <p>
                  I agree to{" "}
                  <span>privacy policy & terms</span>
                </p>
              )}
            </div>
            {haveAccount && <p>forgot password?</p>}
          </div>

          <Button disabled={!formIsValid}>
            {haveAccount ? "login" : "sign up"}
          </Button>
        </form>

        <p>
          {haveAccount
            ? "New on our platform?"
            : "Already have an account?"}{" "}
          <span onClick={formToggleHandler}>
            {haveAccount
              ? "Create an account"
              : "Sign in instead"}
          </span>
        </p>
      </section>
    </main>
  );
};

export default Login;
