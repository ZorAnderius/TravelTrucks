import { HashLoader } from 'react-spinners';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.vehicleLoader}>
      <HashLoader size={200} color={'#101828'} loading={true} />
    </div>
  );
};

export default Loader;
