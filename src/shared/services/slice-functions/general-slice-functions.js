export const pending = store => ({ ...store, loading: true, error: null });
export const reject = (store, { payload }) => ({
  ...store,
  error: payload,
  loading: false,
});
