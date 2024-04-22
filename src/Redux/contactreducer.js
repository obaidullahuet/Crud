import {createSlice} from '@reduxjs/toolkit';

export const contactslice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: []
    },
    reducers: {
        addContact: (state, action) => {
            state.contacts.push(action.payload);
        },
        deleteContact: (state, action) => {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
        },
        editContact: (state, action) => {
            const index = state.contacts.findIndex(contact => contact.id == action.payload.id);
            state.contacts[index] = action.payload;
        }
    }
});

export const {addContact, deleteContact, editContact} = contactslice.actions;
