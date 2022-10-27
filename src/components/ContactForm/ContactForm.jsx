import { Form, FormTitle, FormInput, SubmitButton } from './ContactForm.styled';
import {  useDispatch } from 'react-redux';
// import { contactAdd } from 'redux/contactsSlice';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { nanoid } from 'nanoid';
import {addContact} from '../../redux/books/operationContacts'


export function ContactForm() {
    // const contacts = useSelector((state) => state.contacts.contacts);
    const dispatch = useDispatch();

    const addContact1 = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const newContactName = form.elements.name.value;
        const newContactNumber = form.elements.number.value;

       
        const newContact = { name: newContactName, phone: newContactNumber, };
        dispatch(addContact(newContact));
        form.reset();
    };

    return <>
        <Form onSubmit={addContact1}>
            <FormTitle> Name </FormTitle>
            <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            />
            <FormTitle> Number </FormTitle>
            <FormInput
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                />
            
            <SubmitButton type='submit' >Add Contact</SubmitButton>
        </Form>
    </>
};
