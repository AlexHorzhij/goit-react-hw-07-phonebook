import { createReducer } from "@reduxjs/toolkit";
import actions from "./actionsContacts";

const initialState = {
        items: [],
        isLoading: false,
        error: null
};

export const contactsReducers = createReducer(initialState, {
        [actions.fetchCotactsLoading]: (store) => {
                store.isLoading = true;
                store.error = null;
        },
        [actions.fetchCotactsSuccess]: (store, {payload}) => {
                store.isLoading = false;
                store.items = payload;
        },
        [actions.fetchCotactsError]: (store, {payload}) => {
                store.isLoading = false;
                store.error = payload;
        },
        [actions.addContactsLoading]: (store) => {
                store.isLoading = true;
                store.error = null;
        },
        [actions.addContactsSuccess]: (store, { payload }) => {
                store.isLoading = false;
                store.items.push(payload);
        },
        [actions.addContactsError]: (store, {payload}) => {
                store.isLoading = false;
                store.error = payload;
        },
        [actions.removeContactsLoading]: (store) => {
                store.isLoading = true;
                store.error = null;
        },
        [actions.removeContactsSuccess]: (store,  {payload} ) => {
                store.isLoading = false;
                store.items = store.items.filter((item)=>item.id !== payload);
        },
        [actions.removeContactsError]: (store, {payload}) => {
                store.isLoading = false;
                store.error = payload;
        },
})

// const fetchCotactsLoading = createAction("contacts/fetch/loading");
// const fetchCotactsSuccess = createAction("contacts/fetch/success");
// const fetchCotactsError = createAction("contacts/fetch/error");

// const addContactsLoading = createAction("contacts/add/loading");
// const addContactsSuccess = createAction("contacts/add/success");
// const addContactsError = createAction("contacts/add/error");

// const removeContactsLoading = createAction("contacts/remove/loading");
// const removeContactsSuccess = createAction("contacts/remove/success");
// const removeContactsError = createAction("contacts/remove/error");
