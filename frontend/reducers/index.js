import { combineReducers } from 'redux';

import casesReducer from './cases';
import loggedReducer from './isLogger';

const allReducers = combineReducers({
    cases: casesReducer,
    logged: loggedReducer,
})

export default allReducers;