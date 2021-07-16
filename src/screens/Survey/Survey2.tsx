import React, {FC, useState} from 'react';
import {TextInput, View, Text, Button} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {SurveyContext} from '../../../App';

export const Survey2: FC = () => {
  const navigation = useNavigation();
  return (
    <SurveyContext.Consumer>
      {data => {
        return (
          <View>
            <Text>Câu 2:</Text>
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
          </View>
        );
      }}
    </SurveyContext.Consumer>
  );
};
