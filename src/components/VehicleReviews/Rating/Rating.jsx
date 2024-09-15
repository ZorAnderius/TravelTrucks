import clsx from "clsx";
import styles from "./Rating.module.css";

const Rating = ({ rating }) => {
  const stars = 5;
  return (
    <ul className={styles.ratingList}>
      {[...Array(stars)].map((_, index) => (
        <li
          key={index}
          className={clsx(styles.star, index < rating && styles.active)}
        >
          <span className='icon-rating'></span>
        </li>
      ))}
    </ul>
  );
};

export default Rating;
