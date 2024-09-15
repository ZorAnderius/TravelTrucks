import Rating from "../Rating/Rating";
import styles from "./Review.module.css";

const Review = ({ reviewer_name, reviewer_rating, comment }) => {
  return (
    <>
      <div className={styles.reviewerContainer}>
        <div className={styles.reviewerAvatar}>
          <p>{reviewer_name?.charAt(0).toUpperCase()}</p>
        </div>
        <div className={styles.ratingName}>
          <div>
            <p>{reviewer_name}</p>
          </div>
          <div>
            <Rating rating={reviewer_rating} />
          </div>
        </div>
      </div>
      <div>
        <p className={styles.comment}>{comment}</p>
      </div>
    </>
  );
};

export default Review;
