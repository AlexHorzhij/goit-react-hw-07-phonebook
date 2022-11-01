import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filter/reducerFilter';
import contactsReducers from './contacts/contactsSlice';

export const store = configureStore({
    reducer: {
        contacts: contactsReducers,
        filter: filterReducer,
    },
});

