import { createReducer, on } from '@ngrx/store';
import { initialState } from './counter.state';
import { changeCounterName } from './counter.actions';

const _counterReducer = createReducer(
  initialState,
  on(changeCounterName, (state) => {
    return { ...state, counterName: state.counterName + ' updated' };
  })
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
