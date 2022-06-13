import { createSlice } from "@reduxjs/toolkit";

function contactsFromLs  ()  {
    const contactsFromLocalStorrage = JSON.parse(
      localStorage.getItem('contacts')
    );
    if (contactsFromLocalStorrage) {
     return contactsFromLocalStorrage;
    };
    return [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  };  
const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: contactsFromLs(),
        filter:""
    },
    reducers: {
        submitHundler(state, action) {
            state.items.push(action.payload.nameObj)
        },
      hundleChange(state, action) {
        state.filter = action.payload.value;
         },
        deleteForList(state, action) { 
            state.items=state.items.filter(contact=>contact.id!==action.payload.id)
        },
    },
});

export const { submitHundler, hundleChange, deleteForList } = contactsSlice.actions;
export default contactsSlice.reducer;