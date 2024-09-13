import { Field } from "formik";
import styles from "./VehicleFields.module.css";
import FilterBox from "../FilterBox/FilterBox";

const VehicleFields = ({ children, name, type, data }) => {
  return (
    <div className={styles.filterFieldContainer}>
      <h2 className={styles.filterTitle}>{children}</h2>
      <div className={styles.vehicleContainer}>
        {data?.map(({ id, title, value, iconStyle }) => (
          <Field
            key={id}
            name={type === "radio" ? name : title}
            value={type === "radio" ? value : undefined}
            type={type}
            title={title}
            style={iconStyle}
            component={FilterBox}
          />
        ))}
      </div>
    </div>
  );
};

export default VehicleFields;
