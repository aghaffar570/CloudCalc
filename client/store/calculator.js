import axios from 'axios'
import { getOperation } from './calclog'

// action types
const ADD_OPERATION = 'ADD_OPERATION';

// action creator
export function addOperation (operation) {
  const action = { type: ADD_OPERATION, operation };
  return action;
};

export function postOperation ({ operation, value }) {
  console.log('OPERT IN STORE', operation)
  return function thunk (dispatch) {
    return axios.post('/api/calc', { operation, value })
      .then(res => res.data)
      .then(operation => {
        // console.log('AFTER POST', operations)
        const action = addOperation(operation);
        dispatch(action);
      });
  };
};

// reducer
export default function calculatorReducer (state = [], action) {
  console.log('STATE IN CALC', state)
  switch (action.type) {
    case ADD_OPERATION:
      return action.operation;
    default:
      return state;
  };
};
