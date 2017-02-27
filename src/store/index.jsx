import { combineReducers, createStore } from 'redux';

import * as reducers from '../reducers';

const reducer = combineReducers(reducers);

export default createStore(reducer);
