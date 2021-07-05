/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Alert,
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import CustomTextInput from './src/components/CustomTextInput';

const App = () => {
  const [edge1, setEdge1] = useState('');
  const [edge2, setEdge2] = useState('');
  const [edge3, setEdge3] = useState('');
  const [perimeter, setPerimeter] = useState(0);

  function calculate() {
    const total = +edge1 + +edge2 + +edge3;
    setPerimeter(total);
  }

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <CustomTextInput onChangeEdge={setEdge1} />
      <CustomTextInput onChangeEdge={setEdge2} />
      <CustomTextInput onChangeEdge={setEdge3} />
      <Button title={'Tính'} onPress={calculate} />
      <Text style={{textAlign: 'center', fontSize: 20}}>
        Chu vi: {perimeter}
      </Text>
    </SafeAreaView>
  );
};

export default App;
