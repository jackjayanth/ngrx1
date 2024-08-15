import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RXJSState } from './rxjs.state';

export const RXJS_STATE_NAME = 'rxjs';

const getRXJSState = createFeatureSelector<RXJSState>(RXJS_STATE_NAME);

export const getCounter = createSelector(getRXJSState, (state) => {
  return state.counter;
});

export const getName = createSelector(getRXJSState, (state) => {
  return state.name;
});
