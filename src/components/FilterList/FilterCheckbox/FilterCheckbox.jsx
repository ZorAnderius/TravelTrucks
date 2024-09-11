import { useField } from "formik";
import styles from "./FilterCheckbox.module.css";
import clsx from "clsx";

const isRadio = (type) => type === "radio";

const FilterCheckbox = ({ title, style, field: { name, value }, type }) => {
  const [field, _, helpers] = useField({ name, value, type });
  console.log(field);

  const handleChange = () => {
    isRadio(type)
      ? helpers.setValue(field.value)
      : helpers.setValue(!field.value);
  };

  const styleValue = isRadio(type) ? field.checked : field.value;
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
