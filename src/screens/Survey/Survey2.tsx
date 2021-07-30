import React, {FC, useEffect, useState} from 'react';
import {TextInput, View, Text, Button, ActivityIndicator} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {SurveyContext} from '../../../App';
import {EndPoint} from '../../config';
import {QuestionProps} from './Survey1';

export const Survey2: FC = () => {
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
    <SurveyContext.Consumer>
      {data => {
        return (
          <View>
            {loading ? (
              <ActivityIndicator size={'large'} />
            ) : (
              <>
                <Text>{question?.name}:</Text>
                <Text>{question?.content}?:</Text>
                <TextInput
                  value={data?.answers?.answer2}
                  style={{borderWidth: 1, height: 50}}
                  onChangeText={text => {
                    data?.changeAnswer({
                      ...data?.answers,
                      answer2: text,
                    });
                  }}
                />
                <Button
                  title="next"
                  onPress={() => navigation.navigate('Survey3')}
                />
              </>
            )}
          </View>
        );
      }}
    </SurveyContext.Consumer>
  );
};
