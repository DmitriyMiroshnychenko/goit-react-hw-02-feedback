import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div>
      <p className={styles.statisticsItem}>Good: {good}</p>
      <p className={styles.statisticsItem}>Neutral: {neutral}</p>
      <p className={styles.statisticsItem}>Bad: {bad}</p>
      <p className={styles.statisticsItem}>Total: {total}</p>
      <p className={styles.statisticsItem}>
        Positive feedback: {positivePercentage}%
      </p>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
