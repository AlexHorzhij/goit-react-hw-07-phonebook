import axios from "axios";
import { Notify } from "notiflix";
import actions from "./actionsContacts";

const instanceContacts = axios.create({
    baseURL: "https://6358e7a7ff3d7bddb99383fc.mockapi.io/api",
});

const isDublicate = (contacts, newContactName) => {
    return contacts.items.find(item => item.name.toLowerCase() === newContactName.name.toLowerCase());
};

export const getContacts = () => {
    const foo = async (dispatch) => {
        dispatch(actions.fetchCotactsLoading());
        try {
            const { data } = await instanceContacts.get("/contacts");
            dispatch(actions.fetchCotactsSuccess(data));
        } catch (error) {
            dispatch(actions.fetchCotactsError(error))
        }
    };
    return foo;
};

export const addContact = (newContact) => {
    const foo = async (dispatch, getState) => {
        dispatch(actions.addContactsLoading());
        const {contacts} = getState();
        if (isDublicate(contacts, newContact)) {
            return Notify.warning(`${contacts.items.name} is alrady in contacts`,
                { timeout: 4000, position: 'center-top', width: '400px', fontSize: '28px' })
        };

        try {
            const { data: result} = await instanceContacts.post("/contacts", newContact);
            dispatch(actions.addContactsSuccess(result));
        } catch (error) {
            dispatch(actions.addContactsError(error));
        }
    };
    return foo;
};

export const removeContact = (id) => {
    const foo = async (dispatch) => {
        dispatch(actions.removeContactsLoading());

         try {
            await instanceContacts.delete(`/contacts/${id}`,);
            dispatch(actions.removeContactsSuccess(id));
        } catch (error) {
            dispatch(actions.removeContactsError(error));
        }
    };
    return foo;
};