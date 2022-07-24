import { useState } from 'react';
import { PropTypes } from 'prop-types';
import styles from './contactEditor.module.css';

const formInitialState = {
  name: '',
  number: '',
};

const ContactEditor = ({ onSubmit }) => {
  const [select, setSelect] = useState({
    whatToEdit: '',
  });

  const [input, setInput] = useState('');

  const [form, setForm] = useState(formInitialState);

  function selectHandler({ target }) {
    setSelect({ whatToEdit: target.value });
  }

  function inputChangeHandler({ target }) {
    setInput(target.value);
  }

  function intermediateFormChanger() {
    setInput('');
    setForm(prevState => ({ ...prevState, [whatToEdit]: input }));
    setSelect({ whatToEdit: '' });
  }

  function finalEditHandler(event) {
    event.preventDefault();
    let ultimateForm = {};
    const { name, number } = form;

    if (!name && !number) {
      setForm(formInitialState);
      onSubmit(false);
      return;
    } else if (!name) {
      ultimateForm = { number };
    } else if (!number) {
      ultimateForm = { name };
    } else {
      ultimateForm = form;
    }
    onSubmit(ultimateForm);
    setForm(formInitialState);
  }

  const { whatToEdit } = select;
  return (
    <form className={styles.form} onSubmit={finalEditHandler}>
      <select
        className={styles.select}
        name="select"
        value={whatToEdit}
        onChange={selectHandler}
      >
        <option value="">Choose what do you want to edit</option>
        <option value="name">Name</option>
        <option value="number">number</option>
      </select>
      {whatToEdit && (
        <>
          <input
            className={styles.input}
            type={whatToEdit === 'name' ? 'text' : 'tel'}
            onChange={inputChangeHandler}
          />
          <button
            className={`btn ${styles.inputBtn}`}
            type="button"
            onClick={intermediateFormChanger}
          >
            Done
          </button>
        </>
      )}
      <button className="btn" type="submit">
        Edit
      </button>
    </form>
  );
};

ContactEditor.defaultProps = {
  onSubmit: () => {},
};

ContactEditor.propTypes = {
  onSubmit: PropTypes.func,
};

export default ContactEditor;
