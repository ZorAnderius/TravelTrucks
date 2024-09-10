import { Route, Routes } from "react-router-dom";
import "modern-normalize";
import { Header } from "./components";
import { Catalog, Home } from "./pages";
import { ROUTES_NAME } from "./helpers";
import styles from './App.module.css'


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
