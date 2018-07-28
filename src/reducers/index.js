import { combineReducers } from 'redux';
import LeadReducer from './reducer_lead';
import LoginReducer from './reducer_login';

const rootReducer = combineReducers({
  lead: LeadReducer,
  login: LoginReducer
});

export default rootReducer;
