import React, {FC} from 'react';
import {FlatList, Text, View} from 'react-native';
import axios from 'axios';
import {EndPoint} from '../config';
import {useQuery} from 'react-query';

const UserScreen: FC = () => {
  async function fetchUser() {
    return axios.get(`${EndPoint}/user/1`);
  }

  const result = useQuery('fetchUser', fetchUser);
  const listUser = result.data?.data || [];

  if (result.isLoading) {
    return <Text>Loading</Text>;
  }

  return (
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
  );
};

export default UserScreen;
