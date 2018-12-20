import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// import individual reducers
import pokemon from './pokemon';

const reducer = combineReducers({
  pokemon
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(
    thunkMiddleware,
    createLogger()
  ))
);

export default store;
