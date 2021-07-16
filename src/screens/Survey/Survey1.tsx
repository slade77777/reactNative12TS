import React, {FC, useState} from 'react';
import {TextInput, View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SurveyContext} from '../../../App';

export const Survey1: FC = () => {
  const navigation = useNavigation();

  return (
    <SurveyContext.Consumer>
      {data => {
        return (
          <View>
            <Text>Câu 1:</Text>
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
