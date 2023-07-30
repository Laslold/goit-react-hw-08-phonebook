import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContacts, deleteContacts, getContacts } from 'shared/api';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchContactsThunk',
  async (_, thunkAPI) => {
    try {
      const data = await getContacts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const addContactsThunk = createAsyncThunk(
  'contacts/addContactsThunk',
  async (data, thunkAPI) => {
    try {
      const result = await addContacts(data);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContactsThunk',
  async (id, thunkAPI) => {
    try {
      const data = await deleteContacts(id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
