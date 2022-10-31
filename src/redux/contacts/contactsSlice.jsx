import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operationContacts';

const initialState = {
        items: [],
        isLoadingFetch: false,
        isLoadingAdd: false,
        isLoadingDelete: false,
        error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending]: (store) => {
      store.isLoadingFetch = true;
      store.error = null;
    },
    [fetchContacts.fulfilled]: (store, {payload}) => {
            store.isLoadingFetch = false;
            store.items = payload;
    },
    [fetchContacts.rejected]: (store, {payload}) => {
            store.isLoadingFetch = false;
            store.error = payload;
    },
    [addContact.pending]: (store) => {
            store.isLoadingAdd = true;
            store.error = null;
    },
    [addContact.fulfilled]: (store, { payload }) => {
      store.isLoadingAdd = false;
      store.items.unshift(payload);
    },
    [addContact.rejected]: (store, {payload}) => {
            store.isLoadingAdd = false;
            store.error = payload;
    },
    [deleteContact.pending]: (store) => {
            store.isLoadingDelete = true;
            store.error = null;
    },
    [deleteContact.fulfilled]: (store,  {payload} ) => {
            store.isLoadingDelete = false;
            store.items = store.items.filter((item)=>item.id !== payload.id);
    },
    [deleteContact.rejected]: (store, {payload}) => {
            store.isLoadingDelete = false;
            store.error = payload;
    },
  }
});

export default contactsSlice.reducer;