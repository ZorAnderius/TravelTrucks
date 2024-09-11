import { Field } from "formik";
import styles from "./VehicleFields.module.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

const VehicleFields = ({ children, name, type, data }) => {
  return (
    <div className={styles.filterFieldContainer}>
      <h2 className={styles.filterTitle}>{children}</h2>
      <div className={styles.vehicleContainer}>
        {data?.map(({ id, title, iconStyle }) => (
          <Field
            key={id}
            name={type === "radio" ? name : title}
            value={type === "radio" ? title : undefined}
            type={type}
            title={title}
            style={iconStyle}
            component={FilterCheckbox}
          />
        ))}
      </div>
    </div>
  );
};

export default VehicleFields;
