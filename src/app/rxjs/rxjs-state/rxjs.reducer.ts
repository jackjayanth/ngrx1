import { createReducer, on } from '@ngrx/store';
import { rxjsInitialState } from './rxjs.state';
import {
  decrementCounter,
  deletePerson,
  doubleCounter,
  getPersons,
  incrementCounter,
  nameUpdate,
  postPerson,
  reduceCounter,
  resetCounter,
} from './rxjs.actions';
import { Person } from '../rxjs.models';

const _rxjsReducer = createReducer(
  rxjsInitialState,
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
    return { ...state, persons: state.persons };
  }),
  on(postPerson, (state, action) => {
    // let todos = {} as Todo;
    // todos.todoTask = action.todoTask;
    // todos.todoId = state.todos.length + 1;
    // todos.todoStatus = false;
    // return { ...state, todos: [...state.todos, todos] };
    console.log(action.person);

    let person = {} as Person;
    person.id = state.persons.length + 1;
    person.name = action.person.name;
    person.age = action.person.age;
    return { ...state, persons: [...state.persons, person] };

    // let posts = { ...state.persons };
    // // let length: number = +posts.length + 1;
    // // let person = action.person;
    // // person.id = length;
    // posts.push(action.person);
    // console.log('from the reducer', posts);
    // console.log('from the reducer', { ...state, persons: posts });
    // return { ...state, persons: posts };
  }),
  on(postPerson, (state) => {
    return { ...state };
  }),
  on(deletePerson, (state) => {
    return { ...state };
  })
);

export function rxjsReducer(state: any, action: any) {
  return _rxjsReducer(state, action);
}
