import { configureStore } from '@reduxjs/toolkit';
import { contactsReducers } from './books/reducerContacts';
import { filterReducer } from './filter/reducerFilter';


export const store = configureStore({
    reducer: {
        contacts: contactsReducers,
        filter: filterReducer,
    },
});

