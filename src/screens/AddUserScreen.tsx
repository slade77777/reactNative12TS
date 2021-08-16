import React, {FC, useEffect, useState} from 'react';
import {TextInput, View, Text, Button, Alert} from 'react-native';
import axios from 'axios';
import {useMutation, useQueryClient} from 'react-query';
import {EndPoint} from '../config';
import {useNavigation} from '@react-navigation/native';

const AddUserScreen: FC = () => {
  const [name, setName] = useState('');
  const queryClient = useQueryClient();
  const navigation = useNavigation();
  const mutation = useMutation(
    (newTodo: any) => axios.post(`${EndPoint}/user`, newTodo),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('fetchUser');
      },
    },
  );

  useEffect(() => {
    if (mutation.status === 'error') {
      Alert.alert('Lỗi');
    }
    if (mutation.status === 'success') {
      navigation.goBack();
    }
  }, [mutation.status]);
  return (
    <View>
      <Text>Thêm người dùng</Text>
      <TextInput
        // value={data?.answers?.answer1}
        style={{borderWidth: 1, height: 50}}
        onChangeText={setName}
      />
      <Button
        title={'Lưu'}
        onPress={() => {
          mutation.mutate({name});
        }}
      />
    </View>
  );
};

export default AddUserScreen;
