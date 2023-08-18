import { createReducer, on } from '@ngrx/store';
import { initialState } from './app.state';
import { changeName } from './app.actions';

const _appReducer = createReducer(
  initialState,
  on(changeName, (state) => {
    return { ...state, name: state.name + ' updated' };
  })
);

export function appReducer(state: any, action: any) {
  return _appReducer(state, action);
}
