import { combineReducers } from 'redux';
import LeadReducer from './reducer_lead';
import LoginReducer from './reducer_login';

const rootReducer = combineReducers({
  lead: LeadReducer,
  user: LoginReducer
});

export default rootReducer;
