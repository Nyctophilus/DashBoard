import classes from "./App.module.scss";
import Main from "./Pages/Main";
import { Routes, Route } from "react-router-dom";
import Error from "./Pages/Error";
import Login from "./Pages/Login";

const App = () => {
  return (
    <div className={classes.app}>
      <Routes>
        <Route path="/*" element={<Main />} />

        <Route path="/login" element={<Login />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
