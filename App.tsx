import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  StyleSheet,
  Button,
} from 'react-native';

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
      <View style={{margin: 12}}>
        <Text>Canh 1</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={setEdge1}
        />
        <Text>Canh 2</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={setEdge2}
        />
        <Text>Canh 3</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={setEdge3}
        />
        <Button title={'Tính'} onPress={calculate} />
        <Text style={{textAlign: 'center', fontSize: 20}}>
          Chu vi tam giac la: {perimeter}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});
export default App;
