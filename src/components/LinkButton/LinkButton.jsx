import { Link } from 'react-router-dom';
import styles from './LinkButton.module.css';

const LinkButton = ({ style = "btnLink", link, children }) => {
  return (
    <Link to={link} className={styles[style]}>
      {children}
    </Link>
  );
};

export default LinkButton