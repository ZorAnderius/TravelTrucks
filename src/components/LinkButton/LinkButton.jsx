import { Link } from 'react-router-dom';
import styles from './LinkButton.module.css';

const LinkButton = ({ type, link, children }) => {
  return (
    <Link to={link} className={styles[type]}>
      {children}
    </Link>
  );
};

export default LinkButton;
