import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export type ContactType = {
  title: string;
  data: any;
};

const Contact: React.FC<ContactType> = ({data}) => {
  return (
    <View style={{padding: 15, marginVertical: 8}}>
      <Text style={styles.text}>{data.name + ' : ' + data.phoneNumber}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    margin: 10,
    borderBottomColor: '#E1E1E1',
    borderBottomWidth: 1,
    fontSize: 18,
    color: 'white',
  },
});

export default Contact;
