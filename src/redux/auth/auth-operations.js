import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import toastSetup from 'shared/toastify/toastSetup';
import {
  registerInAPI,
  loginInAPI,
  logOutInAPI,
  getCurrentUser,
} from 'shared/services/api/auth-api';

export const register = createAsyncThunk(
  'auth/signup',
  async (userData, { rejectWithValue }) => {
    try {
      const registeredUser = await registerInAPI(userData);
      toast.success(
        `Welcome to your contacts, dear ${registeredUser.user.name}`,
        {
          ...toastSetup,
          delay: 500,
        }
      );
      return registeredUser;
    } catch (error) {
      toast.error('Server error', toastSetup);
      return rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (userData, { rejectWithValue }) => {
    try {
      const loggedUser = await loginInAPI(userData);
      toast.success(
        `Welcome back to your contacts, dear ${loggedUser.user.name}`,
        {
          ...toastSetup,
          delay: 500,
        }
      );
      return loggedUser;
    } catch (error) {
      toast.warn('This user is not in DB yet. Register first', toastSetup);
      return rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const result = await logOutInAPI();
      toast.success('See you later!', toastSetup);
      return result;
    } catch (error) {
      toast.error('Server error', toastSetup);
      return rejectWithValue(error);
    }
  }
);

export const getCurrent = createAsyncThunk(
  'auth/current',
  async (_, { getState, rejectWithValue }) => {
    try {
      const {
        auth: { token },
      } = getState();
      const currentUser = await getCurrentUser(token);
      toast.success(
        `Welcome back to your contacts, dear ${currentUser.name}`,
        toastSetup
      );
      return currentUser;
    } catch (error) {
      toast.error('Server error', toastSetup);
      return rejectWithValue(error);
    }
  },
  {
    condition: (_, { getState }) => {
      const {
        auth: { token },
      } = getState();
      if (!token) {
        return false;
      }
    },
  }
);
