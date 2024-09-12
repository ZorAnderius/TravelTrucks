import { Link } from 'react-router-dom';
import styles from './LinkButton.module.css';

const LinkButton = ({ style, link, children }) => {
  return (
    <Link to={link} className={style || styles.btnLink}>
      {children}
    </Link>
  );
};

export default LinkButton