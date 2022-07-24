import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, getCurrent } from './auth-operations';
import {
  pending,
  reject,
} from 'shared/services/slice-functions/general-slice-functions';
import { authSuccess } from 'shared/services/slice-functions/auth-slice-functions';

const initialState = {
  user: {},
  token: '',
  isLoggedIn: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [register.pending]: pending,
    [register.fulfilled]: authSuccess,
    [register.rejected]: reject,
    [logout.pending]: pending,
    [logout.fulfilled]: () => initialState,
    [logout.rejected]: reject,
    [login.pending]: pending,
    [login.fulfilled]: authSuccess,
    [login.rejected]: reject,
    [getCurrent.pending]: pending,
    [getCurrent.fulfilled]: (store, { payload }) => ({
      ...store,
      loading: false,
      user: payload,
      isLoggedIn: true,
    }),
    [getCurrent.rejected]: reject,
  },
});

export default authSlice.reducer;
