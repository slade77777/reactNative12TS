import {combineReducers} from 'redux';
import userReducer from './reducer/userReducer';
import {createStore} from 'redux';
import surveyReducer from './reducer/surveyReducer';

export default createStore(combineReducers({userReducer, surveyReducer}));
