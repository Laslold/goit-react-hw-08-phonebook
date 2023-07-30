import { createSlice } from '@reduxjs/toolkit';

import {
  addContactsThunk,
  fetchContactsThunk,
  deleteContactsThunk,
} from './phoneBook-operation';

const initialState = {
  contacts: [
    // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  loading: false,
  error: null,
  filter: '',
};
const contactsReducer = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContactsThunk.fulfilled, (state, action) => {
        state.contacts = action.payload;
        state.loading = false;
      })
      .addCase(fetchContactsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addContactsThunk.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addContactsThunk.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
        state.loading = false;
      })
      .addCase(addContactsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteContactsThunk.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteContactsThunk.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(
          item => item.id !== action.payload.id
        );
        state.loading = false;
      })
      .addCase(deleteContactsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
  // extraReducers: {
  //   [fetchContactsThunk.pending]: store => ({
  //     ...store,
  //     loading: true,
  //     error: null,
  //   }),
  //   [fetchContactsThunk.fulfilled]: (store, { payload }) => {
  //     store.contacts = payload;
  //     store.loading = false;
  //   },
  //   [fetchContactsThunk.rejected]: (store, { payload }) => ({
  //     ...store,
  //     loading: true,
  //     error: payload,
  //   }),
  //   [addContactsThunk.pending]: store => ({
  //     ...store,
  //     loading: true,
  //     error: null,
  //   }),
  //   [addContactsThunk.fulfilled]: (store, { payload }) => {
  //     store.contacts.push(payload);
  //     store.loading = false;
  //   },
  //   [addContactsThunk.rejected]: (store, { payload }) => ({
  //     ...store,
  //     loading: true,
  //     error: payload,
  //   }),
  //   [deleteContactsThunk.pending]: store => {
  //     store.loading = true;
  //     store.error = null;
  //   },
  //   [deleteContactsThunk.fulfilled]: (store, { payload }) => {
  //     store.contacts = store.contacts.filter(item => item.id !== payload.id);
  //     store.loading = false;
  //   },
  //   [deleteContactsThunk.rejected]: (store, { payload }) => {
  //     store.loading = false;
  //     store.error = payload;
  //   },
  // },
  reducers: {
    filter: (store, { payload }) => {
      store.filter = payload;
    },
  },
});
export const { add, remove, filter } = contactsReducer.actions;
export default contactsReducer.reducer;
