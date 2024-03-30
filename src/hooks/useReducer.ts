import { useState } from 'react';

type Reducer<S, A> = (state: S, action: A) => S;

export const useReducer = <S, A>(reducer: Reducer<S, A>, initialState: S) => {
  const [state, setState] = useState(initialState);

  const dispatch = (action: A) => {
    const nextState = reducer(state, action);
    setState(nextState);
  };
  return [state, dispatch] as const;
};
