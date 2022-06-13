import React from "react";
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { deleteForList } from 'redux/contactsSlice';
import s from "../ContactList/ContactList.module.css"

export function ContactLustElement({ name, number, id }) {
    const dispatch = useDispatch();
    const clickHundler = () => (dispatch(deleteForList({id})));
    return (        
               <li><span className={s.name}>{name}:</span> {number} <button onClick={clickHundler} className={s.button}>Delete</button></li>
            )
    
};
ContactLustElement.propTypes = {      
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,  
    id:PropTypes.any.isRequired
}