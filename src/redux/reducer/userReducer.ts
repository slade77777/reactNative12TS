import {LOGIN, LOGIN_FAIL} from '../actionTypes';

const initialValues = {
  name: '',
  email: '',
  loginMessage: '',
};

export default function userReducer(state = initialValues, action: any) {
  switch (action.type) {
    case LOGIN:
      return {
        name: action.payload.name,
        email: action.payload.email,
        loginMessage: '',
      };
    case LOGIN_FAIL:
      return {...initialValues, loginMessage: 'sai thong tin'};
    default:
      return state;
  }
}
