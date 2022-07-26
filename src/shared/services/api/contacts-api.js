import instance from './auth-api';

const fetchAllContacts = async () => {
  const { data } = await instance('/contacts');
  return data;
};

const deleteContactFromApi = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};

const addContactToApi = async contact => {
  const { data } = await instance.post('/contacts', contact);
  return data;
};

const editContactInApi = async contactToUpdate => {
  const { id, ...rest } = contactToUpdate;
  const { data } = await instance.patch(`/contacts/${id}`, { ...rest });
  return data;
};

export {
  fetchAllContacts,
  deleteContactFromApi,
  addContactToApi,
  editContactInApi,
};
