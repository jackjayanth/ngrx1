import { createReducer, on } from '@ngrx/store';
import { initialState } from './material.state';

const _materialReducer = createReducer(initialState);

export function materialReducer(state: any, action: any) {
  return _materialReducer(state, action);
}
