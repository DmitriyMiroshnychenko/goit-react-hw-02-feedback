import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(option => (
        <button
          key={option}
          type="button"
          className={styles.feedbackBtn}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
    // <div>
    //   <button
    //     type="button"
    //     className={styles.feedbackBtn}
    //     onClick={() => onLeaveFeedback('good')}
    //   >
    //     Good
    //   </button>
    //   <button
    //     type="button"
    //     className={styles.feedbackBtn}
    //     onClick={() => onLeaveFeedback('neutral')}
    //   >
    //     Neutral
    //   </button>
    //   <button
    //     type="button"
    //     className={styles.feedbackBtn}
    //     onClick={() => onLeaveFeedback('bad')}
    //   >
    //     Bad
    //   </button>
    // </div>
  );
}

// FeedbackOptions.propTypes = {
//   onLeaveFeedback: PropTypes.func.isRequired,
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
