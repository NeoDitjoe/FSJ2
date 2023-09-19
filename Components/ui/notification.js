import StateContext from '@/stateContext/StateContext';

import classes from './notification.module.css';
// import NotificationContext from '../../store/notification-context';

function Notification(props) {
    const { setStatus,  } = StateContext()

  const { title, message, status } = props;

  let statusClasses = '';

  if (status === 'success') {
    statusClasses = classes.success;
  }

  if (status === 'error') {
    statusClasses = classes.error;
  }

  if (status === 'pending') {
    statusClasses = classes.pending;
  }

  const activeClasses = `${classes.notification} ${statusClasses}`;

  return (
    <div className={activeClasses} onClick={() => setStatus(null)}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default Notification;