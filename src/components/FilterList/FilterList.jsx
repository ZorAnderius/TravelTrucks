import { Field, Formik, Form } from "formik";
import styles from "./FilterList.module.css";
import { useId } from "react";
import clsx from "clsx";
import VehicleFields from "./VehicleFields/VehicleFields";
import { vehicleEquipment, vehicleType } from "../../helpers";
import { initialValues } from "./initialValues";
import Button from "../Button/Button";

const FilterList = () => {
  const locationId = useId();

const handleSubmit = (values, actions) => {
  console.log("submit", values);
};

  return (
    <aside className={styles.filterAside}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values }) => (
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
              <VehicleFields type="radio" name="type" data={vehicleType}>
                Vehicle type
              </VehicleFields>
              </div>
            <Button type="submit" styleProp='submitBtn'>Search</Button>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </aside>
  );
};
export default FilterList;
