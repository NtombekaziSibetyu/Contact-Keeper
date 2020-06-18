import React, { useReducer} from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import  contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types';

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: "Jill Johnson",
                email: "jj@gmail.com",
                phone: "221-212-2222",
                type: "personal"
            },
            {
                id: 2,
                name: "Sara Watson",
                email: "sara@gmail.com",
                phone: "111-111-1111",
                type: "professional"

            },
            {
                id: 3,
                name: "Harry White",
                email: "harry@gmail.com",
                phone: "333-111-3333",
                type: "professional"
            }
        ]
    };

    const [ state, dispatch] = useReducer(contactReducer, initialState);

    // Add contact

    //Delete contact

    //Set current contact

    // Clear current contact

    //Update contact

    //Filter contacts

    //Clear filter

    return (
        <ContactContext.Provider
        value={{
            contacts: state.contacts
        }}>
            {props.children}
        </ContactContext.Provider>
    )
};

export default ContactState;