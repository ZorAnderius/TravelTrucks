import clsx from 'clsx';
import styles from './Container.module.css';

const Container = ({ children, style='' }) => {
  return <div className={clsx(styles.container, style)}>{children}</div>;
}

export default Container