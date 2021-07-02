import React, {FC} from 'react';
import {FlatList, View} from 'react-native';
import Product, {ProductType} from './Product';

type ListProductType = {
  data: Array<ProductType>;
};

const ListProduct: FC<ListProductType> = ({data}) => {
  return (
    <View>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={item => item.name.toString()}
        renderItem={({item}) => (
          <Product
            name={item.name}
            content={item.content}
            imageUrl={item.imageUrl}
          />
        )}
      />
    </View>
  );
};

export default ListProduct;
