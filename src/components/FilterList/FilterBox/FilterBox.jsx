import { useField } from "formik";
import styles from "./FilterBox.module.css";
import clsx from "clsx";

const isRadio = (type) => type === "radio";

const FilterCheckbox = ({ title, style, field, type }) => {
  const { name, value, checked } = field;
  const [fieldProps, , helpers] = useField(name);

  const handleChange = () => {
    isRadio(type)
      ? helpers.setValue(value)
      : helpers.setValue(!fieldProps.value);
  };

  const styleValue = isRadio(type) ? checked : value;
  return (
    <button
      type="button"
      className={clsx(styles.checkboxContainer, styleValue && styles.active)}
      onClick={handleChange}
    >
      <span className={clsx(style, styles.iconStyle)}></span>
      <p className={styles.checkboxTitle}>{title}</p>
    </button>
  );
};

export default FilterCheckbox;
