import React from "react";
import { ContactLustElement } from "components/ContactLustElement/ContactLustElement";
import { useSelector } from "react-redux";
import s from "../ContactList/ContactList.module.css";

export function ContactList() {
   const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);  

  const filtredNames = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });
    return (
        <ul className={s.list}>
           { filtredNames.map(({id, name, number})=> <ContactLustElement key={id} name={name} number={number} id={id} />)}
          </ul>
    )
};


