import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text } from 'react-native';

const UselessTextInput = () => {
  const [Edge1, setEdge1] = React.useState("Edge1");
  const [Edge2, setEdge2] = React.useState("Edge2");
  const [Edge3, setEdge3] = React.useState("Edge3");
  
  console.log(Edge3)

  function calculatePerimeter (Edge1:number, Edge2:number, Edge3:number) {
    return ({Edge1} + {Edge2} + {Edge3})
  }

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={setEdge1}
        value={Edge1}
      />
      <TextInput
        style={styles.input}
        onChangeText={setEdge2}
        value={Edge2}
      />
      <TextInput
        style={styles.input}
        onChangeText={setEdge3}
        value={Edge3}
      />
      <Text>
        Chu vi: {+Edge1 + +Edge2 + +Edge3}
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