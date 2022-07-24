import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/auth-slice';
import contactsReducer from './contacts/contacts-slice';
import { filterReducer } from './filter/filter-reducer';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const persistedAuth = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  auth: persistedAuth,
  contacts: contactsReducer,
  filter: filterReducer,
});

export default rootReducer;
