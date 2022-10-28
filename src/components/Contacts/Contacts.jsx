import React from 'react';
import {Title, Section, Container, Message} from './Contacts.styled';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { useSelector, useDispatch } from "react-redux";
import { getContacts } from 'redux/books/operationContacts';

import { ContactList } from '../ContactList/ContactList';
import { useEffect } from 'react';

export function Contacts() {
    const filter = useSelector(state => state.filter);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getContacts())
    }, [dispatch]);
    const contacts = useSelector(state => state.contacts.items);

    console.log(filter)
    const filtredList = () => {
        return filter ? contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase())) : '';
    };

    return <Container>
        <Section>
            <Title>Phonebook</Title>
            <ContactForm />
        </Section>
        <Section>
            <Title>Contacts</Title>
            <Filter />

            {(filter && (filtredList().length !== 0 
            ? <ContactList contacts={filtredList()}  />
            : <Message>Сontact was not found</Message>)) ||
            (contacts.length === 0 ? <Message>You don't have any contact</Message>
            : <ContactList contacts={contacts} />)
            }
        </Section>
    </Container>
        
};