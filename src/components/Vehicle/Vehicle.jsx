import clsx from "clsx";
import LinkButton from "../LinkButton/LinkButton";
import styles from "./Vehicle.module.css";
import { convertVehiclesData } from "../../helpers/convertVehicleData/convertVehiclesData";
import VehicleFacilities from "../VehicleFacilities/VehicleFacilities";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/vehicle/slice";
import { useCallback, useEffect, useState } from "react";
import { selectFavorites } from "../../redux/vehicle/selector";
import { ROUTES_NAME } from "../../helpers";
import { notify } from "../../redux/notification/slice";

const Vehicle = ({ vehicle }) => {
  const [active, setActive] = useState(false);
  const favoriteVehicles = useSelector(selectFavorites);
  const dispatch = useDispatch();

  const updatedVehicle = convertVehiclesData(vehicle, 'catalog');
  const {
    name,
    imgVehicle,
    price,
    rating,
    reviewsQuantity,
    location,
    description,
    facilities,
  } = updatedVehicle;
  
  const handleClick = useCallback(() => {
    if (!active) {
      dispatch(addFavorite(updatedVehicle));
      dispatch(notify({ toastType: "info", message: "Added to favorites" }));
    } else {
      dispatch(removeFavorite(updatedVehicle.id));
      dispatch(notify({ toastType: "info", message: "Remove to favorites" }));
    }
    setActive(!active);
  }, [active, dispatch, updatedVehicle]);

useEffect(() => {
  setActive(!!favoriteVehicles.find(({id}) => id === updatedVehicle.id));
}, [favoriteVehicles, updatedVehicle.id]);


  return (
    <>
      <div className={styles.thumbVehicle}>
        <img className={styles.imgVehicle} src={imgVehicle} alt={name} />
      </div>
      <div className={styles.vehicleInfoContainer}>
        <div className={styles.titleContainer}>
          <div className={styles.titleWrap}>
            <h2 className={styles.titleCard}>{name}</h2>
            <div className={styles.priceSubscribe}>
              <p>{price}</p>
              <button
                className={clsx(
                  styles.subscribeBtn,
                  active && styles.activeSubscribe
                )}
                onClick={handleClick}
              >
                <span className="icon-heart"></span>
              </button>
            </div>
          </div>
          <div className={styles.ratingLocationWrapper}>
            <div className={styles.ratingWrapper}>
              <span className={clsx("icon-rating", styles.rating)}></span>
              <LinkButton
                type='review'
                link={{
                  pathname: `${ROUTES_NAME.catalog}/${updatedVehicle.id}/${ROUTES_NAME.vehicleReview}`,
                  state: { scrollToReviews: true },
                }}
              >
                <p>
                  {rating}({reviewsQuantity}
                  {reviewsQuantity <= 1 ? "Review" : "Reviews"})
                </p>
              </LinkButton>
            </div>
            <div className={styles.locationWrapper}>
              <span className="icon-map"></span>
              <p>{location}</p>
            </div>
          </div>
        </div>
        <p className={styles.descriptionCard}>{description}</p>
        <ul className={styles.facilitiesContainer}>
          {facilities?.map((facility) => (
            <li key={facility.id} className={styles.facilitiesItem}>
              <VehicleFacilities info={facility} />
            </li>
          ))}
        </ul>
        <LinkButton type='btn' link={`${ROUTES_NAME.catalog}/${updatedVehicle.id}`}>
          Show more
        </LinkButton>
      </div>
    </>
  );
};

export default Vehicle;
