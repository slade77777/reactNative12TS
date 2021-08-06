import {ANSWER1, ANSWER2, ANSWER3} from '../actionTypes';

export const answerQuestion1 = (result: string) => {
  return {
    type: ANSWER1,
    payload: {
      result,
    },
  };
};

export const answerQuestion2 = (result: string) => {
  return {
    type: ANSWER2,
    payload: {
      result,
    },
  };
};

export const answerQuestion3 = (result: string) => {
  return {
    type: ANSWER3,
    payload: {
      result,
    },
  };
};
