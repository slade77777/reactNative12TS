import {LOGIN, LOGIN_FAIL} from '../actionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Dispatch} from '@reduxjs/toolkit';

export const login =
  (username: string, email: string) => async (dispatch: Dispatch) => {
    //call api here to check user information
    try {
      await AsyncStorage.setItem(
        '@user_data',
        JSON.stringify({username, email}),
      );
      dispatch({
        type: LOGIN,
        payload: {
          name: username,
          email,
        },
      });
    } catch (e) {
      dispatch({
        type: LOGIN_FAIL,
        payload: {},
      });
    }
  };
