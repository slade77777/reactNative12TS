import React, {FC, useEffect, useState} from 'react';
import {TextInput, View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SurveyContext} from '../../../App';
import {EndPoint} from '../../config';

export type QuestionProps = {
  name: string;
  content: string;
};

export const Survey1: FC = () => {
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
    <SurveyContext.Consumer>
      {data => {
        return (
          <View>
            <Text>{question?.name}:</Text>
            <Text>{question?.content}?:</Text>
            <TextInput
              value={data?.answers?.answer1}
              style={{borderWidth: 1, height: 50}}
              onChangeText={text => {
                data?.changeAnswer({
                  ...data?.answers,
                  answer1: text,
                });
              }}
            />
            <Button
              title="next"
              onPress={() => navigation.navigate('Survey2')}
            />
          </View>
        );
      }}
    </SurveyContext.Consumer>
  );
};
