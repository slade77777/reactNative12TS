import {ANSWER1, ANSWER2, ANSWER3} from '../actionTypes';

const initialValues = {
  answer1: '',
  answer2: '',
  answer3: '',
};

export default function surveyReducer(state = initialValues, action: any) {
  switch (action.type) {
    case ANSWER1:
      return {
        ...state,
        answer1: action.payload.result,
      };
    case ANSWER2:
      return {
        ...state,
        answer2: action.payload.result,
      };
    case ANSWER3:
      return {
        ...state,
        answer3: action.payload.result,
      };
    default:
      return state;
  }
}
