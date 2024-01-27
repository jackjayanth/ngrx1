import { createReducer, on } from '@ngrx/store';
import { Counter, initialState } from './counter.state';
import { addCounter, changeCounterName, deleteCounter } from './counter.actions';

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
  on(deleteCounter, (state, action) => {
    const confirmed = window.confirm('Are you sure you want to delete this user?');
    if (confirmed) {
      let counterData1 = state.counterData.filter((elem)=>elem.id !== action.counterId)
      return { ...state, counterData: counterData1};
    }
    else return state
  }),
  on(changeCounterName, (state) => {
    return { ...state, counterName: state.counterName + ' updated' };
  })
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
