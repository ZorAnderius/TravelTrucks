import { Link } from 'react-router-dom';
import styles from './LinkButton.module.css';

const LinkButton = ({link, children}) => {
  return (
      <Link to={link} className={styles.btnLink}>{children}</Link>
  )
}

export default LinkButton