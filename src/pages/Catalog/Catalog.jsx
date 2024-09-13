import { useEffect } from "react";
import {
  Container,
  FilterList,
  Loader,
  Section,
  VehicleList,
} from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllVehicle } from "../../redux/vehicle/operation";
import { selectLoader } from "../../redux/vehicle/selector";
import styles from "./Catalog.module.css";

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
      <Section css='catalog'>
        <Container style={styles.catalogContainer}>
          <FilterList />
          <VehicleList />
        </Container>
      </Section>
    </main>
  );
};

export default Catalog;
