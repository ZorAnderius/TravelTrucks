import styles from "./Button.module.css";

const Button = ({ type = 'button', styleProp = 'btn', handleClick, children, ...props }) => {

  const handlePress = () => { type === 'button' &&  handleClick()}
  return (
    <button type={type} className={styles[styleProp]} onClick={handlePress} {...props}>
      {children}
    </button>
  );
};

export default Button;
