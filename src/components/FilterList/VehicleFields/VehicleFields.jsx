import { Field } from 'formik';
import FilterBox from '../FilterBox/FilterBox';
import Title from '../../Title/Title';
import styles from './VehicleFields.module.css';

const VehicleFields = ({ children, name, type, data }) => {
  return (
    <div className={styles.filterFieldContainer}>
      <Title>{children}</Title>
      <div className={styles.vehicleContainer}>
        {data?.map(({ id, title, value, iconStyle }) => (
          <Field
            key={id}
            name={type === 'radio' ? name : title}
            value={type === 'radio' ? value : undefined}
            type={type}
            title={title}
            style={iconStyle}
            component={FilterBox}
          />
        ))}
      </div>
    </div>
  );
};

export default VehicleFields;
