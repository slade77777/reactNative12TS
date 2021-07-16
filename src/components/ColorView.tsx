import React, {FC} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';

type Prop = {
  backgroundColor: string;
  changeColorBackground: (val: string) => void;
};

const ColorView: FC<Prop> = props => {
  console.log(props.backgroundColor);
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

export default React.memo(ColorView);
