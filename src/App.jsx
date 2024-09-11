import { Outlet} from "react-router-dom";
import "modern-normalize";
import { Header } from "./components";
import styles from './App.module.css'


const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
