import toast from 'react-hot-toast';
import clsx from 'clsx';
import { GiPodiumWinner } from 'react-icons/gi';
import { FaPersonFallingBurst } from 'react-icons/fa6';
import { HiInformationCircle } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import Button from '../Button/Button';
import styles from './Notification.module.css';

const iconMap = {
  success: GiPodiumWinner,
  error: FaPersonFallingBurst,
  info: HiInformationCircle,
};

const Notification = ({ message, toastType, toastId }) => {
  const Icon = iconMap[toastType];
  return (
    <div
      className={clsx(styles.notification, styles[`notification-${toastType}`])}
    >
      {Icon && <Icon className={styles[toastType]} />}
      <p className={styles.message}>{message}</p>
      <Button
        type="button"
        styleProp="toast"
        handleClick={() => toast.dismiss(toastId)}
      >
        <IoClose />
      </Button>
    </div>
  );
};

export default Notification;
