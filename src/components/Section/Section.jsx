import PropTypes from 'prop-types';
import styles from './Section.module.css';

export function Section({ title, children }) {
  return (
    <section>
      {title && <h2 className={styles.sectionTitle}>{title}</h2>}
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
