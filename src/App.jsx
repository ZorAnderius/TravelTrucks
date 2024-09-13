import { Outlet, useNavigate } from "react-router-dom";
import "modern-normalize";
import { Header } from "./components";
import { useSelector } from "react-redux";
import { selectError } from "./redux/vehicle/selector";
import { useEffect } from "react";
import { ROUTES_NAME } from "./helpers";

import styles from "./App.module.css";

const App = () => {
  const navigate = useNavigate();
  const error = useSelector(selectError);

  useEffect(() => {
    if (error) {
      navigate(ROUTES_NAME.error);
    }
  }, [error, navigate]);
  return (
    <div className={styles.wrapper}>
       <Header />
      <Outlet />
    </div>
  );
};

export default App;
