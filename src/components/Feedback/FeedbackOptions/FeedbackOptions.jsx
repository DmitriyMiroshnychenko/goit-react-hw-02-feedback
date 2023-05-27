import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

export function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <div>
      <button
        type="button"
        className={styles.feedbackBtn}
        onClick={() => onLeaveFeedback('good')}
      >
        Good
      </button>
      <button
        type="button"
        className={styles.feedbackBtn}
        onClick={() => onLeaveFeedback('neutral')}
      >
        Neutral
      </button>
      <button
        type="button"
        className={styles.feedbackBtn}
        onClick={() => onLeaveFeedback('bad')}
      >
        Bad
      </button>
    </div>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
