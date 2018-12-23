import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// import individual reducers
import calculator from './calculator';
import calclog, { fetchOperation } from './calclog';

const reducer = combineReducers({
  calculator,
  calclog
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(
    thunkMiddleware,
    createLogger()
  ))
);

// store.dispatch(fetchOperation()) // retrieve data first;
export default store;
