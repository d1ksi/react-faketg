import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { promiseReducer } from "./promiseReduser";
import { authReducer } from './authReducer';
import { localStoredReduser } from './localStoredReduser';


const reducers = combineReducers({
   promise: promiseReducer,
   auth: localStoredReduser(authReducer, 'auth'),
});

export const store = createStore(
   reducers,
   applyMiddleware(thunk)
);
