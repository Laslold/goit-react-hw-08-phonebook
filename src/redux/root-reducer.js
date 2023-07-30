import { combineReducers } from '@reduxjs/toolkit';
import contactsReducer from './phoneBook/phoneBook-slice';
import authSlice from './auth/auth-slice';
import {  persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; //

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(persistConfig, authSlice);
const RootReducer = combineReducers({
  phoneBook: contactsReducer,
  auth: persistedAuthReducer,
});
export default RootReducer;
