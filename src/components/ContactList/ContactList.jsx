import PropTypes from 'prop-types';
import ContactEl from './ContactEl';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, deleteClickHandler, openModalHandler }) => {
  const contactsList = contacts.map(({ id, name, number }) => (
    <ContactEl
      key={id}
      id={id}
      deleteClickHandler={deleteClickHandler}
      openModalHandler={openModalHandler}
      name={name}
      number={number}
    />
  ));

  return <ul className={styles.list}>{contactsList}</ul>;
};

ContactList.defaultProps = {
  contacts: [],
  deleteClickHandler: () => {},
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteClickHandler: PropTypes.func,
};

export default ContactList;
