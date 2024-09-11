import clsx from "clsx";
import LinkButton from "../LinkButton/LinkButton";
import styles from "./Vehicle.module.css";
import Button from "../Button/Button";

const Vehicle = ({ vehicle }) => {
  console.log(vehicle);
  const {
    id,
    gallery,
    name,
    price,
    rating,
    reviews,
    location,
    description,
    AC,
    TV,
    bathroom,
    engine,
    kitchen,
    transmission,
    radio,
  } = vehicle;
  return (
    <>
      <div className={styles.thumbVehicle}>
        <img className={styles.imgVehicle} src={gallery[0].thumb} alt={name} />
      </div>
      <div className={styles.vehicleInfoContainer}>
        <div className={styles.titleContainer}>
          <div className={styles.titleWrap}>
            <h2 className={styles.titleCard}>{name}</h2>
            <div className={styles.priceSubscribe}>
              <p>€{price}.00</p>
              <Button style={`subscribeBtn`}>
                <span className="icon-heart"></span>
              </Button>
            </div>
          </div>
          <div className={styles.ratingLocationWrapper}>
            <div className={styles.ratingWrapper}>
              <span className={clsx("icon-rating", styles.rating)}></span>
              <LinkButton style="reviewLink">
                <p>
                  {rating}({reviews.length}{" "}
                  {reviews.length <= 1 ? "Review" : "Reviews"})
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
        <div></div>
        <div></div>
        <LinkButton>Show more</LinkButton>
      </div>
    </>
  );
};

export default Vehicle;
