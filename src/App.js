import classes from "./App.module.scss";
import Main from "./Pages/Main";

const App = () => {
  return (
    <div className={classes.app}>
      <Main />
    </div>
  );
};

export default App;
