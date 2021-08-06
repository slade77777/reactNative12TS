import React, {FC, useContext, useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import {login} from '../redux/action/userAction';
import {connect} from 'react-redux';

const Login: FC<{loginUser: Function}> = ({loginUser}) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        placeholder={'Name'}
      />
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        placeholder={'Email'}
      />
      <Button title={'Đăng nhập'} onPress={() => loginUser(name, email)} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 1,
    marginVertical: 30,
  },
});

export default connect(null, {loginUser: login})(Login);
