import { useSelector } from "react-redux";
import styles from "./VehicleReviews.module.css";
import { selectCurrentVehicle } from "../../redux/vehicle/selector";
import Review from "./Review/Review";

const VehicleReviews = () => {
  const vehicle = useSelector(selectCurrentVehicle);

  return (
    vehicle && (
      <ul className={styles.reviewList}>
        {vehicle?.reviews?.map((review, idx) => (
          <li
            key={`${review.review_name}${idx}${review.review_rating}`}
            className={styles.reviewItem}
          >
            <Review {...review} />
          </li>
        ))}
      </ul>
    )
  );
};

export default VehicleReviews;
