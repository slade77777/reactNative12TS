import userReducer from './reducer/userReducer';
import surveyReducer from './reducer/surveyReducer';
import {configureStore} from '@reduxjs/toolkit';

export default configureStore({
  reducer: {userReducer, surveyReducer},
});
