import { useReducer } from "react";

const initialState = {
  value: "",
  isTouched: false,
};

const inputReducer = (state, action) => {
  if (action.type === "INPUT_CHANGE") {
    return {
      value: action.value,
      isTouched: true,
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      ...state,
      isTouched: true,
    };
  }

  if (action.type === "INPUT_RESET") {
    return initialState;
  }

  throw new Error("This action is not handled");
};

const useValidate = (validate) => {
  const [inputState, dispatch] = useReducer(
    inputReducer,
    initialState
  );

  const isValid = validate(inputState.value);
  const hasError = !isValid && inputState.isTouched;

  const inputChangeHandler = (e) =>
    dispatch({
      type: "INPUT_CHANGE",
      value: e.target.value,
    });

  const inputBlurHandler = () =>
    dispatch({
      type: "INPUT_BLUR",
    });

  const inputResetHandler = () =>
    dispatch({
      type: "INPUT_RESET",
    });

  return {
    value: inputState.value,
    hasTouched: inputState.isTouched,
    isValid,
    hasError,
    OnChange: inputChangeHandler,
    OnBlur: inputBlurHandler,
    OnReset: inputResetHandler,
  };
};

export default useValidate;
