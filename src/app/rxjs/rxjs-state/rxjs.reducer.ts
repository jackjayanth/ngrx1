import { createReducer, on } from '@ngrx/store';
import { rxjsInitialState } from './rxjs.state';
import {
  decrementCounter,
  doubleCounter,
  incrementCounter,
  nameUpdate,
  reduceCounter,
  resetCounter,
} from './rxjs.actions';

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
  })
);

export function rxjsReducer(state: any, action: any) {
  return _rxjsReducer(state, action);
}
