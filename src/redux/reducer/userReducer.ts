import {LOGIN} from '../actionTypes';

const initialValues = {
  name: '',
  email: '',
};

export default function userReducer(state = initialValues, action: any) {
  switch (action.type) {
    case LOGIN:
      return {
        name: action.payload.name,
        email: action.payload.email,
      };
    default:
      return state;
  }
}
