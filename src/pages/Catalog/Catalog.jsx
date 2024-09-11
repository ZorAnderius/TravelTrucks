import { Container, FilterList, Section, VehicleList } from "../../components";
import styles from './Catalog.module.css';

const Catalog = () => {
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