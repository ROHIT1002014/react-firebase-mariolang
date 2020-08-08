import authReducer from './authReducer';
import projectReducer from './projectReducer';
import {combineReducers} from 'redux' // to combine all reducers

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer
})

export default rootReducer;