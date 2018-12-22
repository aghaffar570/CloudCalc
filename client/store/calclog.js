import axios from 'axios';

// action types
const GET_OPERATION = 'GET_OPERATION';

// action creator
export function getOperation (operation) {
  const action = { type: GET_OPERATION, operation };
  return action;
};

// thunk creator
export function fetchOperation () {
  return function thunk (dispatch) {
    return axios.get('/api/calc')
      .then(res => res.data)
      .then(operations => {
        console.log(operations, 'LOCATED IN STORE')
        const action = getOperation(operations);
        dispatch(action);
      })
      .catch((err) => {
        console.log(err, 'fetch ops did not go through');
      });
  };
};

// reducer
export default function calclogReducer (state = [], action) {
  switch (action.type) {
    case GET_OPERATION:
      return action.operation;
    default:
      return state;
  };
};
