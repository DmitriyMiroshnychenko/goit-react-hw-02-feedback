import PropTypes from 'prop-types';
import styles from './Notification.module.css';

export function Notification({ message }) {
  return <h3 className={styles.notification}>{message}</h3>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
