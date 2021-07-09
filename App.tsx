/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {Alert, Button, SafeAreaView, StyleSheet, Text} from 'react-native';
import Clock from './src/components/Clock';

const App = () => {
  const [showClock, setShowClock] = useState(true);

  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Button title={'Ẩn / hiện'} onPress={() => setShowClock(!showClock)} />
      {showClock && <Clock />}
    </SafeAreaView>
  );
};

export default App;
