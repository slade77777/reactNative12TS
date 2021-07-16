import React, {FC, useState} from 'react';
import {TextInput, View, Text, Button} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {SurveyContext} from '../../../App';

export const Survey3: FC = () => {
  const navigation = useNavigation();

  return (
    <SurveyContext.Consumer>
      {data => {
        return (
          <View>
            <Text>Câu 3:</Text>
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
