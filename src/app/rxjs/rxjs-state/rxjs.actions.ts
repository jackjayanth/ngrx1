import { createAction, props } from '@ngrx/store';
import { Person } from '../rxjs.models';

export const incrementCounter = createAction('incrementCounter');
export const decrementCounter = createAction('decrementCounter');
export const doubleCounter = createAction('doubleCounter');
export const reduceCounter = createAction('reduceCounter');
export const resetCounter = createAction('resetCounter');
export const nameUpdate = createAction('nameUpdate');
export const getPersons = createAction('getPersons');
export const postPerson = createAction(
  'postPerson',
  props<{ person: Person }>()
);
export const postPersonWithoutId = createAction(
  'postPersonWithoutId',
  props<{ person: Person }>()
);
export const updatePerson = createAction(
  'updatePerson',
  props<{ person: Person }>()
);
export const deletePerson = createAction(
  'deletePerson',
  props<{ id: number }>()
);

export const loadPeople = createAction('loadPeople');
export const loadPeopleSuccess = createAction(
  'loadPeopleSuccess',
  props<{ people: Person[] }>()
);
export const loadPeopleFailure = createAction(
  'loadPeopleFailure',
  props<{ error: any }>()
);
