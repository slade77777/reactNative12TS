import React, {FC} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';

type Prop = {
  backgroundColor: string;
  text?: string;
  changeColorBackground: (color: string) => void;
};

const ColorView: FC<Prop> = props => {
  return (
    <TouchableOpacity
      onPress={() => props.changeColorBackground(props.backgroundColor)}
      style={{
        backgroundColor: props.backgroundColor,
        width: '100%',
        height: 50,
        marginVertical: 10,
      }}>
      <Text style={{color: 'white'}}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default ColorView;
