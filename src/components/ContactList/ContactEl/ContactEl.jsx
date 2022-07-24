import PropTypes from 'prop-types';
import styles from './ContactEl.module.css';
const ContactEl = ({
  id,
  name,
  number,
  deleteClickHandler,
  openModalHandler,
}) => (
  <li className={styles.contactEl}>
    <span className={styles.contactText}>{name}: </span>
    <span className={styles.contactText}>{number}</span>
    <button
      className={`btn ${styles.deleteBtn}`}
      type="button"
      onClick={() => deleteClickHandler({ id, name })}
    >
      Delete
    </button>
    <button
      className="btn"
      type="button"
      onClick={() => openModalHandler({ id, name, number })}
    >
      Edit
    </button>
  </li>
);

ContactEl.defaultProps = {
  id: '',
  name: '',
  number: '',
  deleteClickHandler: () => {},
  openModalHandler: () => {},
};

ContactEl.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteClickHandler: PropTypes.func,
  openModalHandler: PropTypes.func,
};
export default ContactEl;
