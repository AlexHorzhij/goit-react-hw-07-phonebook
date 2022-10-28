import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operationContacts';

const initialState = {
        items: [],
        isLoading: false,
        error: null
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending]: (store) => {
      store.isLoading = true;
      store.error = null;
    },
    [fetchContacts.fulfilled]: (store, {payload}) => {
            store.isLoading = false;
            store.items = payload;
    },
    [fetchContacts.rejected]: (store, {payload}) => {
            store.isLoading = false;
            store.error = payload;
    },
    [addContact.pending]: (store) => {
            store.isLoading = true;
            store.error = null;
    },
    [addContact.fulfilled]: (store, { payload }) => {
      store.isLoading = false;
      store.items.push(payload);
    },
    [addContact.rejected]: (store, {payload}) => {
            store.isLoading = false;
            store.error = payload;
    },
    [deleteContact.pending]: (store) => {
            store.isLoading = true;
            store.error = null;
    },
    [deleteContact.fulfilled]: (store,  {payload} ) => {
            store.isLoading = false;
            store.items = store.items.filter((item)=>item.id !== payload.id);
    },
    [deleteContact.rejected]: (store, {payload}) => {
            store.isLoading = false;
            store.error = payload;
    },
  }
});

// export const { contactAdd, contactRemove, contactFilter } = contactsSlice.actions;

export default contactsSlice.reducer;