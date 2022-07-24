export const totalUpdateContacts = (store, { payload }) => {
  store.items = payload;
  store.loading = false;
};
