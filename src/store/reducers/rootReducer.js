import authReducer from './authReducer';
import projectReducer from './projectReducer';
import {combineReducers} from 'redux' // to combine all reducers
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer
})

export default rootReducer;