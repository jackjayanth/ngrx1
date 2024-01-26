import { createAction, props } from '@ngrx/store';
import { Counter } from './counter.state';

export const changeCounterName = createAction('changeCounterName');
export const addCounter = createAction('addCounter', props<{ counterData: any }>());
