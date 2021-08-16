import React, {FC} from 'react';
import {Button, FlatList, Text, View} from 'react-native';
import axios from 'axios';
import {EndPoint} from '../config';
import {useQuery} from 'react-query';
import {useNavigation} from '@react-navigation/native';

const UserScreen: FC = () => {
  async function fetchUser() {
    return fetch(`${EndPoint}/user`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    }).then(result => result.json());
  }

  const navigation = useNavigation();
  const result = useQuery('fetchUser', fetchUser);
  const listUser = result.data || [];

  if (result.isLoading) {
    return <Text>Loading</Text>;
  }

  return (
    <View>
      <Button
        title={'Thêm người dùng'}
        onPress={() => navigation.navigate('AddUser')}
      />
      <FlatList
        data={listUser}
        renderItem={user => {
          return (
            <View>
              <Text style={{color: 'red', fontSize: 20}}>{user.item.name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default UserScreen;
