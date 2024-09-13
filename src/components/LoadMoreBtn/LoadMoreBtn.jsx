import { forwardRef } from 'react';
import styles from './LoadMoreBtn.module.css';

const LoadMoreBtn = forwardRef(({ type, handleClick, children }, ref) => (
  <button
    ref={ref}
    type={type}
    className={styles.loadMore}
    onClick={handleClick}
  >
    {children}
  </button>
));

LoadMoreBtn.displayName = 'LoadMoreBtn';

    export default LoadMoreBtn;