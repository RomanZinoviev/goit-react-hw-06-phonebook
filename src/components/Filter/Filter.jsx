import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { hundleChange } from 'redux/contactsSlice';
import s from '../Filter/Filter.module.css';

export function Filter() {

  const value = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  const onChange = (e) => (dispatch(hundleChange({value:e.target.value})));

  return (
    <label className={s.label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        className={s.input}
      />
    </label>
  );
};

