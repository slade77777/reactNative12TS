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
  const [yearOfBirt, setYear] = useState('');
  const [age, setAge] = useState(0);

  function calulateAge() {
    let today = new Date();
    const subtraction = today.getFullYear() - +yearOfBirt;
    setAge(subtraction);
  }

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View style={{margin: 12}}>
        <Text>Nam sinh</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={setYear}
        />
        <Button title={'Tính'} onPress={calulateAge} />
        <Text style={{textAlign: 'center', fontSize: 20}}>
          Tuoi cua ban la: {age}
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
