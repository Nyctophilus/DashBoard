import { lazy, Suspense, useEffect } from "react";
import classes from "./App.module.scss";
import Main from "./Pages/Main";
import { Routes, Route, Navigate } from "react-router-dom";
import Loading from "./Pages/Loading";
import { useDispatch, useSelector } from "react-redux";
import { initializeToken } from "./store/login-slice";

const Error = lazy(() => import("./Pages/Error"));
const Login = lazy(() => import("./Pages/Login"));
const Dashboard = lazy(() =>
  import("./components/Dashboard/Dashboard")
);
const Invoice = lazy(() => import("./Pages/Invoice"));
const AccountSettings = lazy(() =>
  import("./Pages/AccountSettings")
);

const App = () => {
  const { isLoggedIn } = useSelector(
    (state) => state.login
  );
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(`init token`);
    dispatch(initializeToken());
  }, [dispatch]);

  return (
    <div className={classes.app}>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/DashBoard" replace />}
          />

          <Route path="/" element={<Main />}>
            {isLoggedIn && (
              <Route
                path="/DashBoard"
                element={<Dashboard />}
              />
            )}

            <Route
              path="/account-settings"
              element={<AccountSettings />}
            />

            <Route path="/invoice" element={<Invoice />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route
            path="/register"
            element={
              <Navigate to="/login?auth=false" replace />
            }
          />

          <Route path="/error" element={<Error />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
