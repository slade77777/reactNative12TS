import React, {FC, useContext} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {SurveyContext, UserContext} from '../../App';

const HomeScreen: FC = () => {
  const data = useContext(SurveyContext);
  const user = useContext(UserContext);
  const answerList = data?.answers;
  return (
    <TouchableOpacity>
      <Text>đây là câu trả lời của: {user?.userInfo?.name}</Text>
      <Text>Email của người dùng là: {user?.userInfo?.email}</Text>
      <Text>câu 1: {answerList?.answer1}</Text>
      <Text>câu 2: {answerList?.answer2}</Text>
      <Text>câu 3: {answerList?.answer3}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(HomeScreen);
