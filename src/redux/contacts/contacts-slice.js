import { createSlice } from '@reduxjs/toolkit';
import * as contactsOperations from './contacts-operations';
import {
  pending,
  reject,
} from 'shared/services/slice-functions/general-slice-functions';
import { totalUpdateContacts } from 'shared/services/slice-functions/contacts-slice-functions';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [contactsOperations.getAllContacts.pending]: pending,
    [contactsOperations.getAllContacts.fulfilled]: totalUpdateContacts,
    [contactsOperations.getAllContacts.rejected]: reject,
    [contactsOperations.deleteContact.pending]: pending,
    [contactsOperations.deleteContact.fulfilled]: totalUpdateContacts,
    [contactsOperations.deleteContact.rejected]: reject,
    [contactsOperations.addContact.pending]: pending,
    [contactsOperations.addContact.fulfilled]: (store, { payload }) => {
      store.items = [...store.items, payload];
      store.loading = false;
    },
    [contactsOperations.addContact.rejected]: reject,
    [contactsOperations.editContact.pending]: pending,
    [contactsOperations.editContact.fulfilled]: (store, { payload }) => {
      const requiredIdx = store.items.findIndex(item => item.id === payload.id);
      store.items.splice(requiredIdx, 1, payload);
      store.loading = false;
    },
    [contactsOperations.editContact.rejected]: reject,
  },
});

export default contactsSlice.reducer;
