import { createReducer, on } from '@ngrx/store';
import { Counter, initialState } from './counter.state';
import { addCounter, changeCounterName } from './counter.actions';

const _counterReducer = createReducer(
  initialState,
  on(changeCounterName, (state) => {
    return { ...state, counterName: state.counterName + ' updated' };
  }),
  on(addCounter, (state, action) => {
    let counterData1 = {} as Counter;
    counterData1.id = state.counterData.length + 1;
    counterData1.name = action.counterData.name;
    counterData1.age = action.counterData.age;
    return { ...state, counterData: [...state.counterData, counterData1] };
  }),
  on(changeCounterName, (state) => {
    return { ...state, counterName: state.counterName + ' updated' };
  })
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
