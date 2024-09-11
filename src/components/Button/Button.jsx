import styles from "./Button.module.css";

const Button = ({ type='button', style, children }) => {
  return (
    <button type={type} className={styles[style]}>
      {children}
    </button>
  );
};

export default Button;
