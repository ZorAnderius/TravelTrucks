import { Field, Formik } from "formik";
import { Form } from "react-router-dom";
import styles from "./FilterList.module.css";
import { useId } from "react";
import Button from "../Button/Button";
import clsx from "clsx";
import VehicleFields from "./VehicleFields/VehicleFields";
import { vehicleEquipment, vehicleType } from "../../helpers";

const FilterList = () => {
  const locationId = useId();

  const handleSubmit = (values) => {
    console.log("submit", values);
  };

  return (
    <aside className={styles.filterAside}>
      <Formik initialValues={{ location: "" }} onSubmit={handleSubmit}>
        <Form className={styles.form}>
          <div className={styles.locationFilter}>
            <label htmlFor={locationId} className={styles.locationTitle}>
              Location
            </label>
            <Field
              className={styles.locationInput}
              id={locationId}
              type="text"
              name="location"
              placeholder="City"
            />
            <span className={clsx("icon-map", styles.iconsMap)}></span>
          </div>
          <div className={styles.filterListContainer}>
            <h2 className={styles.mainTitle}>Filters</h2>
            <VehicleFields type="checkbox" data={vehicleEquipment}>
              Vehicle equipment
            </VehicleFields>
            <VehicleFields
              type="radio"
              name={{ name: "type" }}
              data={vehicleType}
            >
              Vehicle type
            </VehicleFields>
          </div>
          <Button type="submit" style={styles.submitBtn}>
            Search
          </Button>
        </Form>
      </Formik>
    </aside>
  );
};
export default FilterList;
