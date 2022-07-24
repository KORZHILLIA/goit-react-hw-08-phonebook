// import { useState, useEffect, useRef } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrent } from 'redux/auth/auth-operations';
import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import {
//   getAllContacts,
//   deleteContact,
//   addContact,
//   editContact,
// } from 'redux/contacts/contacts-operations';
// import { setFilter } from 'redux/filter/filter-actions';
// import { getContactsLoading } from 'redux/contacts/contacts-selectors';
// import { getFilteredContacts } from 'redux/filter/filter-selectors';
// import ContactForm from './ContactForm';
// import Filter from './Filter';
// import ContactList from './ContactList';
// import Modal from 'shared/components/Modal';
// import ContactEditor from './ContactEditor';
import Header from './Header';
import { AllRoutes } from './AllRoutes';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrent());
  }, [dispatch]);
  return (
    <>
      <Header />
      <div className="container">
        <AllRoutes />
        <ToastContainer />
      </div>
    </>
  );
  // const [modal, setModal] = useState({
  //   isModalOpen: false,
  //   contact: null,
  // });
  // const { contact } = modal;
  // const dispatch = useDispatch();
  // const toastId = useRef(null);
  // useEffect(() => {
  //   dispatch(getAllContacts());
  // }, [dispatch]);
  // const filteredContacts = useSelector(getFilteredContacts);
  // const loading = useSelector(getContactsLoading);
  // function dismissCurrentToast() {
  //   toast.dismiss(toastId.current);
  // }
  // function addContactToGlobalStore(contact) {
  //   dispatch(addContact(contact));
  // }
  // function deleteClickHandler(id) {
  //   dispatch(deleteContact(id));
  // }
  // function setGlobalFilter(letter) {
  //   toast.dismiss(toastId.current);
  //   dispatch(setFilter(letter));
  // }
  // function openModalHandler(contact) {
  //   setModal({ isModalOpen: true, contact });
  // }
  // function closeModalHandler(updatedContact) {
  //   setModal(prevState => ({ ...prevState, isModalOpen: false }));
  //   if (!updatedContact) {
  //     return;
  //   }
  //   const totallyUpdatedContactInfo = { ...contact, ...updatedContact };
  //   dispatch(editContact(totallyUpdatedContactInfo));
  // }
  // const { isModalOpen } = modal;
  // return (
  //   <div className="container">
  //     <h1>Phonebook</h1>
  //     <ContactForm
  //       onSubmit={addContactToGlobalStore}
  //       onFocus={dismissCurrentToast}
  //     />
  //     <h2>Contacts</h2>
  //     <Filter onChange={setGlobalFilter} />
  //     {/* {error && <p>{error}</p>} */}
  //     {loading && <p>loading...</p>}
  //     <ContactList
  //       contacts={filteredContacts}
  //       deleteClickHandler={deleteClickHandler}
  //       openModalHandler={openModalHandler}
  //     />
  //     {isModalOpen && (
  //       <Modal>
  //         <ContactEditor onSubmit={closeModalHandler} />
  //       </Modal>
  //     )}
  //     <ToastContainer />
  //   </div>
  // );
};
