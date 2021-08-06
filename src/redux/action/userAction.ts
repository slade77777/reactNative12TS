import {LOGIN} from '../actionTypes';

export const login = (username: string, email: string) => {
  return {
    type: LOGIN,
    payload: {
      name: username,
      email,
    },
  };
};
