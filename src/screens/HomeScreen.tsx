import React, {FC, useContext} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

const HomeScreen: FC<{user: any; answerList: any}> = ({user, answerList}) => {
  return (
    <TouchableOpacity>
      <Text>đây là câu trả lời của: {user.name}</Text>
      <Text>Email của người dùng là: {user.email}</Text>
      <Text>câu 1: {answerList.answer1}</Text>
      <Text>câu 2: {answerList.answer2}</Text>
      <Text>câu 3: {answerList.answer3}</Text>
    </TouchableOpacity>
  );
};

export default connect(store => {
  return {user: store.userReducer, answerList: store.surveyReducer};
})(HomeScreen);
