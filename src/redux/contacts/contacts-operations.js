import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import toastSetup from 'shared/toastify/toastSetup';
import {
  fetchAllContacts,
  deleteContactFromApi,
  addContactToApi,
  editContactInApi,
} from 'shared/services/api/contacts-api';

export const getAllContacts = createAsyncThunk(
  'contacts/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const allContacts = await fetchAllContacts();
      return allContacts;
    } catch (error) {
      return rejectWithValue(
        toast.error('Server error, try again', {
          ...toastSetup,
          autoClose: false,
        })
      );
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/add',
  async (contact, { rejectWithValue }) => {
    try {
      const addedContact = await addContactToApi(contact);
      return addedContact;
    } catch (error) {
      return rejectWithValue(
        toast.error('Something wrong with contact adding', toastSetup)
      );
    }
  },
  {
    condition: (contact, { getState }) => {
      const {
        contacts: { items },
      } = getState();
      const { name, phone } = contact;
      const isContactPresent = items.find(
        item => item.name === name && item.phone === phone
      );
      if (isContactPresent) {
        toast.error(`${contact.name} is already present`, toastSetup);
        return false;
      }
    },
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (contactInfo, { getState, rejectWithValue }) => {
    const { id, name } = contactInfo;
    try {
      const deletedContact = await deleteContactFromApi(id);
      console.log(deletedContact);
      toast.success(`Contact ${name}'s been deleted`, {
        ...toastSetup,
        delay: 0,
      });
      const { contacts } = getState();
      const contactsWithoutDeletedContact = contacts.items.filter(
        contact => contact.id !== id
      );
      return contactsWithoutDeletedContact;
    } catch (error) {
      return rejectWithValue(
        toast.error(
          'Server is unable to delete this contact, try again later',
          toastSetup
        )
      );
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/edit',
  async (contact, { rejectWithValue }) => {
    try {
      const updatedContact = await editContactInApi(contact);
      return updatedContact;
    } catch (error) {
      rejectWithValue(
        toast.error(
          "It's impossible to update this contact at a time, try once again",
          toastSetup
        )
      );
    }
  }
);
