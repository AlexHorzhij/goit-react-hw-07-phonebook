import { configureStore } from '@reduxjs/toolkit';
import { contactsReducers } from './books/reducerContacts';


export const store = configureStore({
    reducer: {
        contacts: contactsReducers,
        // filter: 
    },
});

