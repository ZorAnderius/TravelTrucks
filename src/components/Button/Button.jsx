import styles from "./Button.module.css";

const Button = ({ type = 'button', styleProp = 'btn', handleClick, children }) => {
  return (
    <button type={type} className={styles[styleProp]} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
