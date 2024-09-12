import { Link } from 'react-router-dom';
import styles from './LinkButton.module.css';

const LinkButton = ({ styleProp, link, children }) => {
  return (
    <Link to={link} className={styleProp || styles.btnLink}>
      {children}
    </Link>
  );
};

export default LinkButton