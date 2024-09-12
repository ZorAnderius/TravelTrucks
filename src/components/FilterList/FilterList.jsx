import { Field, Formik, Form } from "formik";
import { useEffect, useId } from "react";
import { useDispatch } from "react-redux";
import { changeFilters } from "../../redux/filters/slice";
import clsx from "clsx";

import VehicleFields from "./VehicleFields/VehicleFields";
import Button from "../Button/Button";
import { vehicleEquipment, vehicleType } from "../../helpers";
import { initialValues } from "./initialValues";

import styles from "./FilterList.module.css";

const FilterList = () => {
  const locationId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    console.log(values);
    dispatch(changeFilters(values));
  };

  useEffect(() => {
    dispatch(changeFilters(initialValues));
  }, [dispatch]);

  return (
    <aside className={styles.filterAside}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
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
          <Button type="submit" styleProp="submitBtn">
            Search
          </Button>
        </Form>
      </Formik>
    </aside>
  );
};

export default FilterList;
