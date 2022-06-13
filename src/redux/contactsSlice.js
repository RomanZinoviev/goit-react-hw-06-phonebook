import { createSlice } from "@reduxjs/toolkit";
import store from "./store";


const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        contacts: []
    },
    reducers: {
        submitHundler(state, action) {
            state.contacts.push(action.payload.obj)
        },
        hundleChange(state, action) { },
        deleteForList(state, action) { 
            state.contacts=state.contacts.filter(contact=>contact.id!==action.payload.id)
        },
    },
});

export const { submitHundler, hundleChange, deleteForList } = contactsSlice.actions;
export default contactsSlice.reducer;