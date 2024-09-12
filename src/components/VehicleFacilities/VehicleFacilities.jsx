import clsx from "clsx";
import styles from "./VehicleFacilities.module.css";

const VehicleFacilities = ({info:{title, iconStyle}}) => {
  return <>
    <span className={clsx(iconStyle, styles.facilitiesIcon)}></span>
    <p>{title}</p>
  </>;
};

export default VehicleFacilities;