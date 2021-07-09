import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text } from 'react-native';

const UselessTextInput = () => {
   const [Year, setYear] = React.useState("Year")
  const year1:number = (2021 - +Year);
  function calculateAge (Year:number) {
    return ({Year})
  }

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={setYear}
        value={Year}
      />
      
      <Text>
        Tuoi cua ban la: ({year1})
        </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    paddingHorizontal: 20,
    borderWidth: 1,
  },
});

export default UselessTextInput;