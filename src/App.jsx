import { Route, Routes } from "react-router-dom";
import "modern-normalize";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import styles from './App.module.css'
import { ROUTES_NAME } from "./helpers/constants/routes";

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Routes>
        <Route path={ROUTES_NAME.home} element={<Home />} />
        <Route path={ROUTES_NAME.catalog} element={<Catalog />} />
      </Routes>
    </div>
  );
}

export default App;
