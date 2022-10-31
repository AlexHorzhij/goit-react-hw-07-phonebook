import PropTypes from 'prop-types';
import { Button, ButtonWrapper } from './ContactsListItem';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operationContacts';
import { Oval } from 'react-loader-spinner';
import { useState } from 'react';

export function ContactsItem({ contact }) {
    const dispatch = useDispatch();
    const [loader, setloader]=useState("")

    const editContact = (e) => {
        const editedContact = e.target.id;
        console.log(editedContact);
    }
    
    const removeContact = (id) => {
        setloader(id)
        dispatch(deleteContact(id));
    };

        console.log('load', loader)

    return <>{contact.name}:  {contact.phone}
        <ButtonWrapper>{loader===contact.id && <Oval
            height={20}
            width={20}
            marginRight={10}
            color="#223c26"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="#4c714c"
            strokeWidth={5}
            strokeWidthSecondary={5}/>}  
            <Button id={contact.id} onClick={editContact}>Edit</Button>
            <Button  onClick={()=>removeContact(contact.id)}>Delete</Button>
            
        </ButtonWrapper>
    </>
};
    
ContactsItem.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
    }).isRequired,
};


 