import React, {FC, useEffect, useState} from 'react';
import {TextInput, View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {EndPoint} from '../../config';
import {connect} from 'react-redux';
import {answerQuestion1} from '../../redux/action/surveyAction';

export type QuestionProps = {
  name: string;
  content: string;
};

const Survey1: FC<{answer: Function}> = ({answer}) => {
  const navigation = useNavigation();
  const [question, setQuestion] = useState<QuestionProps>();

  useEffect(() => {
    fetch(`${EndPoint}/survey/1`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
      .then(result => result.json())
      .then(result => {
        setQuestion(result);
      });
  }, []);

  return (
    <View>
      <Text>{question?.name}:</Text>
      <Text>{question?.content}?:</Text>
      <TextInput
        // value={data?.answers?.answer1}
        style={{borderWidth: 1, height: 50}}
        onChangeText={text => {
          answer(text);
        }}
      />
      <Button title="next" onPress={() => navigation.navigate('Survey2')} />
    </View>
  );
};

export default connect(null, {answer: answerQuestion1})(Survey1);
