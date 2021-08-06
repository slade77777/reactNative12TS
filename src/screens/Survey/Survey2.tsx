import React, {FC, useEffect, useState} from 'react';
import {TextInput, View, Text, Button, ActivityIndicator} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {EndPoint} from '../../config';
import {QuestionProps} from './Survey1';
import {connect} from 'react-redux';
import {answerQuestion2} from '../../redux/action/surveyAction';

const Survey2: FC<{answer: Function}> = ({answer}) => {
  const navigation = useNavigation();
  const [question, setQuestion] = useState<QuestionProps>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${EndPoint}/survey/2`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    })
      .then(result => result.json())
      .then(result => {
        setQuestion(result);
        setLoading(false);
      });
  }, []);

  return (
    <View>
      {loading ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <>
          <Text>{question?.name}:</Text>
          <Text>{question?.content}?:</Text>
          <TextInput
            style={{borderWidth: 1, height: 50}}
            onChangeText={text => {
              answer(text);
            }}
          />
          <Button title="next" onPress={() => navigation.navigate('Survey3')} />
        </>
      )}
    </View>
  );
};
export default connect(null, {answer: answerQuestion2})(Survey2);
