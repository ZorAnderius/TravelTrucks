import styles from "./Button.module.css";

const Button = ({ type = 'button', styleProp = 'btn', handleClick, children }) => {

  const handlePress = () => { type === 'button' &&  handleClick()}
  return (
    <button type={type} className={styles[styleProp]} onClick={handlePress}>
      {children}
    </button>
  );
};

export default Button;
