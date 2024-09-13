import { useEffect } from "react";
import {
  Container,
  FilterList,
  Loader,
  Section,
  VehicleList,
} from "../../components";
import styles from "./Catalog.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllVehicle } from "../../redux/vehicle/operation";
import { selectLoader } from "../../redux/vehicle/selector";

const Catalog = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoader);

  useEffect(() => {
    dispatch(fetchAllVehicle());
  }, [dispatch]);

  return isLoading ? (
    <Loader/>
  ) : (
    <main>
      <Section style={styles.catalog}>
        <Container style={styles.catalogContainer}>
          <FilterList />
          <VehicleList />
        </Container>
      </Section>
    </main>
  );
};

export default Catalog;
