import React, {FC, useContext} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {SurveyContext} from '../../App';

const HomeScreen: FC = () => {
  const data = useContext(SurveyContext);
  const answerList = data?.answers;
  return (
    <TouchableOpacity>
      <Text>this is result</Text>
      <Text>câu 1: {answerList?.answer1}</Text>
      <Text>câu 2: {answerList?.answer2}</Text>
      <Text>câu 3: {answerList?.answer3}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(HomeScreen);
