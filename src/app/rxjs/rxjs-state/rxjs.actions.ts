import { createAction, props } from '@ngrx/store';
import { Person } from '../rxjs.models';

export const incrementCounter = createAction('incrementCounter');
export const decrementCounter = createAction('decrementCounter');
export const doubleCounter = createAction('doubleCounter');
export const reduceCounter = createAction('reduceCounter');
export const resetCounter = createAction('resetCounter');
export const nameUpdate = createAction('nameUpdate');
export const getPersons = createAction('getPersons');
export const postPerson = createAction('postPerson', props<Person>());
export const updatePerson = createAction('updatePerson', props<Person>());
export const deletePersons = createAction(
  'deletePersons',
  props<{ id: number }>()
);
