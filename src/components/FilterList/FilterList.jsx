import { Field, Formik, Form} from "formik";
import { memo, useId } from "react";
import { useDispatch } from "react-redux";
import { changeFilters, resetFilters } from "../../redux/filters/slice";
import clsx from "clsx";

import VehicleFields from "./VehicleFields/VehicleFields";
import Button from "../Button/Button";
import { scrollToLoad, vehicleEquipment, vehicleType } from "../../helpers";
import { initialValues } from "./initialValues";

import styles from "./FilterList.module.css";
import { isExistFilterValues } from "../../helpers/isExistFilterValue";

const FilterList = memo(() => {
  const locationId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(changeFilters({ ...values, location: values.location.trim() }));
    scrollToLoad(0);
  };

  return (
    <>
      <aside className={styles.filterAside}>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ values, setValues }) => {
            return (
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
                <div className={styles.btnGroup}>
                  <Button type="submit" styleProp="submitBtn">
                    Search
                  </Button>
                  {isExistFilterValues(values) && (
                    <Button
                      type="button"
                      styleProp="reset"
                      onClick={() => {
                        setValues(initialValues);
                        dispatch(resetFilters());
                        scrollToLoad(0);
                      }}
                    >
                      Reset
                    </Button>
                  )}
                </div>
              </Form>
            );
          }}
        </Formik>
      </aside>
      <div className={styles.asideContainer}></div>
    </>
  );
});

FilterList.displayName = "FilterList";

export default FilterList;
