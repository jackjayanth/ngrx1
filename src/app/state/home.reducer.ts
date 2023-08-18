import { createReducer, on } from '@ngrx/store';
import { initialState } from './home.state';
import { changeName } from './home.actions';

const _homeReducer = createReducer(
  initialState,
  on(changeName, (state) => {
    return { ...state, name: state.name + ' updated' };
  })
);

export function homeReducer(state: any, action: any) {
  return _homeReducer(state, action);
}
