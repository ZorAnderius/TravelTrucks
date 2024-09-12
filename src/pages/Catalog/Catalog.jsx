import { useEffect } from "react";
import { Container, FilterList, Section, VehicleList } from "../../components";
import styles from './Catalog.module.css';
import { useDispatch } from "react-redux";
import { fetchAllVehicle } from "../../redux/vehicle/operation";

const Catalog = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchAllVehicle());
  }, [dispatch]); 

  return (
    <main>
      <Section style={styles.catalog}>
        <Container style={styles.catalogContainer}>
          <FilterList />
          <VehicleList />
        </Container>
      </Section>
    </main>
  );
}

export default Catalog