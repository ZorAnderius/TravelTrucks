import styles from "./Button.module.css";

const Button = ({ type, style, children }) => {
  return (
    <button type={type} className={styles[style]}>
      {children}
    </button>
  );
};

export default Button;
