export interface CounterState {
  counterName: string;
  counterData: Counter[];
}

export interface Counter {
  id: number;
  name: string;
  age: number;
}

export const initialState = {
  counterName: 'Jay counterName',
  counterData: [
    { id: 1, name: 'Jay', age:12 },
    { id: 2, name: 'Lauru', age:22 }
    ],
};
