import React, {FC, useContext, useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import {UserContext} from '../../App';

const Login: FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const userContext = useContext(UserContext);

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
      <Button
        title={'Đăng nhập'}
        onPress={() =>
          userContext.login({
            name,
            email,
          })
        }
      />
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

export default Login;
