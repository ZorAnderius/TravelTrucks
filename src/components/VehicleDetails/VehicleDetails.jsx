import { useSelector } from 'react-redux';
import clsx from 'clsx';
import { selectCurrentVehicle } from '../../redux/vehicle/selector';
import { convertVehiclesData, ROUTES_NAME } from '../../helpers';
import LinkButton from '../LinkButton/LinkButton';
import styles from './VehicleDetails.module.css';

const VehicleDetails = () => {
  const vehicle = useSelector(selectCurrentVehicle);
  const {
    name,
    rating,
    reviewsQuantity,
    location,
    price,
    gallery,
    description,
  } = convertVehiclesData(vehicle);
  return (
    <div className={styles.vehicleContainer}>
      <div className={styles.vehicleInfoText}>
        <h2 className={styles.titleVehicle}>{name}</h2>
        <div className={styles.vehicleLocationReview}>
          <div className={styles.vehicleRatingContainer}>
            <span className={clsx('icon-rating', styles.rating)}></span>
            <LinkButton type="review" link={ROUTES_NAME.vehicleReview}>
              {rating}({reviewsQuantity}{' '}
              {reviewsQuantity <= 1 ? 'Review' : 'Reviews'})
            </LinkButton>
          </div>
          <div className={styles.locationWrapper}>
            <span className="icon-map"></span>
            <p>{location}</p>
          </div>
        </div>
        <p className={styles.priceVehicle}>{price}</p>
      </div>
      <ul className={styles.galleryContainer}>
        {gallery?.map(({ original }, index) => (
          <li key={original + index} className={styles.galleryVehicle}>
            <img src={original} alt={name} className={styles.imgVehicle} />
          </li>
        ))}
      </ul>

      <p className={styles.vehicleDescription}>{description}</p>
    </div>
  );
};

export default VehicleDetails;
