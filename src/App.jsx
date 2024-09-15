import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Suspense, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import 'modern-normalize';
import { selectError } from './redux/vehicle/selector';
import { selectorNotification } from './redux/notification/selector';
import { notify } from './redux/notification/slice';
import { ROUTES_NAME } from './helpers';
import { optionToast } from './helpers/optionToast';
import { Header, Loader, Notification } from './components';
import styles from './App.module.css';

const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const notification = useSelector(selectorNotification);

  useEffect(() => {
    const { toastType, message } = notification;
    if (toastType && message) {
      toast(
        t => (
          <Notification
            message={message}
            toastType={toastType}
            toastId={t.id}
          />
        ),
        optionToast
      );
      dispatch(notify({ toastType: '', message: '' }));
    }
  }, [notification, dispatch]);

  useEffect(() => {
    if (error) {
      navigate(ROUTES_NAME.error);
    }
  }, [error, navigate]);

  return (
    <div className={styles.wrapper}>
      <Suspense fallback={<Loader />}>
        <Header />
        <Outlet />
      </Suspense>
      <Toaster />
    </div>
  );
};

export default App;
