import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import toastSetup from 'shared/toastify/toastSetup';
import 'react-toastify/dist/ReactToastify.css';
import {
  getAllContacts,
  deleteContact,
  addContact,
  editContact,
} from 'redux/contacts/contacts-operations';
import { setFilter } from 'redux/filter/filter-actions';
import { getContactsLoading } from 'redux/contacts/contacts-selectors';
import { getFilteredContacts } from 'redux/filter/filter-selectors';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Modal from 'shared/components/Modal';
import ContactEditor from 'components/ContactEditor';

const ContactsPage = () => {
  const [modal, setModal] = useState({
    isModalOpen: false,
    contact: null,
  });

  const { contact } = modal;
  const dispatch = useDispatch();
  const toastId = useRef(null);
  // const isLoggedIn = useLoggedIn();

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  const filteredContacts = useSelector(getFilteredContacts);
  const loading = useSelector(getContactsLoading);

  function dismissCurrentToast() {
    toast.dismiss(toastId.current);
  }

  function addContactToGlobalStore(contact) {
    dispatch(addContact(contact));
  }

  function deleteClickHandler({ id, name }) {
    dispatch(deleteContact({ id, name }));
  }

  function setGlobalFilter(letter) {
    toast.dismiss(toastId.current);
    dispatch(setFilter(letter));
  }

  function openModalHandler(contact) {
    setModal({ isModalOpen: true, contact });
  }

  function closeModalHandler(updatedContact) {
    setModal(prevState => ({ ...prevState, isModalOpen: false }));
    const { name, number } = contact;
    if (!updatedContact) {
      toast.warn('Nothing to update', toastSetup);
      return;
    }
    const totallyUpdatedContactInfo = { ...contact, ...updatedContact };
    const { name: updatedName, number: updatedNumber } =
      totallyUpdatedContactInfo;
    if (name === updatedName && number === updatedNumber) {
      toast.warn('Nothing to update', toastSetup);
      return;
    }
    dispatch(editContact(totallyUpdatedContactInfo));
  }

  const { isModalOpen } = modal;

  // if (!isLoggedIn) {
  //   return <Navigate to="/login" />;
  // }

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm
        onSubmit={addContactToGlobalStore}
        onFocus={dismissCurrentToast}
      />
      <h2>Contacts</h2>
      <Filter onChange={setGlobalFilter} />
      {loading && <p>loading...</p>}
      <ContactList
        contacts={filteredContacts}
        deleteClickHandler={deleteClickHandler}
        openModalHandler={openModalHandler}
      />
      {isModalOpen && (
        <Modal>
          <ContactEditor onSubmit={closeModalHandler} />
        </Modal>
      )}
    </div>
  );
};

export default ContactsPage;
