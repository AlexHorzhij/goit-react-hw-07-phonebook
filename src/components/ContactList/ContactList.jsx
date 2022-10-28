import PropTypes from 'prop-types';
import { Item, Button, List } from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { removeContact } from '../../redux/books/operationContacts';

export function ContactList({ contacts }) {
    const dispatch = useDispatch();
    
    const removeContact1 = (e) => {
        const deletedContact = e.target.id;
        dispatch(removeContact(deletedContact));
    };

    return (<List>{contacts.map(contact => <Item key={contact.id}>{contact.name}: {contact.phone}
        <Button id={contact.id} onClick={removeContact1}>Delete</Button></Item>)}</List>
        );
};
    
ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
    })).isRequired,
};


 