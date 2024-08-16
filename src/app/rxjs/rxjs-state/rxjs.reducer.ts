import { createReducer, on } from '@ngrx/store';
import { rxjsInitialState } from './rxjs.state';
import {
  decrementCounter,
  deletePerson,
  doubleCounter,
  getPersons,
  incrementCounter,
  loadPeopleFailure,
  loadPeopleSuccess,
  nameUpdate,
  postPerson,
  postPersonWithoutId,
  reduceCounter,
  resetCounter,
  updatePerson,
} from './rxjs.actions';
import { Person } from '../rxjs.models';

const _rxjsReducer = createReducer(
  rxjsInitialState,
  on(loadPeopleSuccess, (state, { people }) => ({
    ...state,
    people,
    error: null,
  })),
  on(loadPeopleFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(incrementCounter, (state) => {
    return { ...state, counter: state.counter + 1 };
  }),
  on(decrementCounter, (state) => {
    return { ...state, counter: state.counter - 1 };
  }),
  on(doubleCounter, (state) => {
    return { ...state, counter: state.counter * 2 };
  }),
  on(reduceCounter, (state) => {
    return { ...state, counter: state.counter / 2 };
  }),
  on(resetCounter, (state) => {
    return { ...state, counter: 0 };
  }),
  on(nameUpdate, (state) => {
    return { ...state, name: state.name + ' updated' };
  }),
  on(getPersons, (state) => {
    return { ...state, people: state.people };
  }),
  on(postPerson, (state, action) => {
    let person = {} as Person;
    person.id = state.people.length + 1;
    person.name = action.person.name;
    person.age = action.person.age;
    return { ...state, people: [...state.people, person] };
  }),
  on(postPersonWithoutId, (state, action) => {
    return { ...state, people: [...state.people, action.person] };
  }),
  on(updatePerson, (state, action) => {
    const updatedPersons = state.people.map((person) => {
      return person.id === action.person.id
        ? { ...person, ...action.person }
        : person;
    });
    return { ...state, people: updatedPersons };
  }),
  on(deletePerson, (state, action) => {
    let people = state.people.filter((elem) => elem.id !== action.id);
    return { ...state, people: people };
  })
);

export function rxjsReducer(state: any, action: any) {
  return _rxjsReducer(state, action);
}
