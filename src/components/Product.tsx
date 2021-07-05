import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';

export type ProductType = {
  name: string;
  content: string;
  imageUrl: string;
};

const Product: React.FC<ProductType> = props => {
  console.log(props);
  return (
    <View style={styles.product}>
      {/*<View>*/}
      {/*  <Text>{name}</Text>*/}
      {/*  <Text>{content}</Text>*/}
      {/*</View>*/}
      {/*<Image*/}
      {/*  source={{*/}
      {/*    uri: imageUrl,*/}
      {/*  }}*/}
      {/*  style={{width: 50, height: 50}}*/}
      {/*/>*/}
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'yellow',
    width: Dimensions.get('window').width * 0.5,
  },
});

export default Product;
