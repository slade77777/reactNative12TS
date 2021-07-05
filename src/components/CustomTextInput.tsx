import React, {FC} from 'react';
import {TextInput} from 'react-native';

const CustomTextInput: FC<{onChangeEdge: (val: string) => void}> = ({
  onChangeEdge,
}) => {
  return (
    <TextInput
      onChangeText={text => {
        onChangeEdge(text);
      }}
      style={{borderWidth: 1, padding: 5, height: 40, margin: 10}}
      keyboardType="numeric"
    />
  );
};

export default CustomTextInput;
