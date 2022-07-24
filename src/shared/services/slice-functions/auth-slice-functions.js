export const authSuccess = (store, { payload }) => {
  store.loading = false;
  store.user = payload.user;
  store.token = payload.token;
  store.isLoggedIn = true;
};
