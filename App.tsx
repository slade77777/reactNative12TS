/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import store from './src/redux/store';
import {Provider} from 'react-redux';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Navigation from './src/Navigation';

const App = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
  });
  //
  // useEffect(async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('@user_data');
  //     if (value !== null) {
  //       const userData = JSON.parse(value);
  //       setUser(userData);
  //     }
  //   } catch (e) {
  //     // error reading value
  //   }
  // }, []);

  // async function loginUser(userData: any) {
  //   setUser(userData);
  //   try {
  //     await AsyncStorage.setItem('@user_data', JSON.stringify(userData));
  //   } catch (e) {
  //     console.log(e);
  //     // saving error
  //   }
  // }

  return (
    <Provider store={store}>
      <SafeAreaView
        style={{
          backgroundColor: 'white',
          flex: 1,
        }}>
        <Navigation />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
