// import { ADD, DELETE, CHANGE_FILTER } from './contact-types';
import { v4 as uniqueId } from 'uuid';
import { createAction } from '@reduxjs/toolkit';
export const addContact = createAction(
  'contact/addContact',
  function prepare(name, number) {
    return {
      payload: {
        id: uniqueId(),
        name,
        number,
      },
    };
  },
);
export const deleteContact = createAction('contact/deleteContact');
export const changeFilter = createAction('contact/changeFilter');

// export const addContact = (name, number) => ({
//   type: ADD,
//   payload: {
//     id: uniqueId(),
//     name,
//     number,
//   },
// });
// export const deleteContact = contactId => ({
//   type: DELETE,
//   payload: contactId,
// });

// export const changeFilter = value => ({
//   type: CHANGE_FILTER,
//   payload: value,
// });
