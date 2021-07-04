import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';

export type ContactType = {
  title: string;
  data: any;
};

const Product: React.FC<ContactType> = ({title, data}) => {
  return (
    <View style={{justifyContent: 'center',backgroundColor:'#FFFFFF', marginLeft: 10, marginRight: 10}}>
      <Text style={styles.text}>{data.name +" : " + data.phoneNumber}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#000000',
    fontSize: 16,
    margin: 10,
    borderBottomColor: '#E1E1E1',
    borderBottomWidth: 1,    
  },
});

export default Product;
