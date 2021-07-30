import React, {FC, useEffect, useState} from 'react';
import {TextInput, View, Text, Button} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {SurveyContext} from '../../../App';
import {QuestionProps} from './Survey1';
import {EndPoint} from '../../config';
import axios from 'axios';

export const Survey3: FC = () => {
  const navigation = useNavigation();
  const [question, setQuestion] = useState<QuestionProps>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`${EndPoint}/survey/3`).then(result => {
      setQuestion(result.data);
      setLoading(false);
    });
  }, []);

  return (
    <SurveyContext.Consumer>
      {data => {
        return (
          <View>
            <Text>{question?.name}</Text>
            <Text>{question?.content}</Text>
            <TextInput
              value={data?.answers?.answer3}
              style={{borderWidth: 1, height: 50}}
              onChangeText={text => {
                data?.changeAnswer({
                  ...data?.answers,
                  answer3: text,
                });
              }}
            />
            <Button
              title={'finish'}
              onPress={() => navigation.navigate('Home')}
            />
          </View>
        );
      }}
    </SurveyContext.Consumer>
  );
};
