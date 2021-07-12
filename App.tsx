import React, {useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import _ from 'lodash';

const productData = [
  {
    title: 'Lenovo Chromebook',
    price: 279.0,
    img: 'https://anphat.com.vn/media/product/250_38438_techzones_lenovo_yoga_slim_7_14itl05_i5_1135g7_16gb_512gb_ssd_7.jpg',
  },
  {
    title: 'HP Gaming Laptop',
    price: 1400.0,
    img: 'https://anphat.com.vn/media/product/37327_33742_hp_pavilion_gaming_15_ec1054ax_1n1h6pa_r5_4600h_542013861d504ab0a9822ffab255fe17_master.png',
  },
  {
    title: 'HP EliteOne',
    price: 1500.0,
    img: 'https://anphat.com.vn/media/product/36581_hp_omen_15_ek0078tx_26y68pa_i7_10750h_2_ee34bb88dd1d4e22b3ebc6ea5002a648_master.png',
  },
  {
    title: 'HP Pavilion Gaming',
    price: 1200.0,
    img: 'https://anphat.com.vn/media/product/37087_18785_laptop_hp_pavilion_15_eg0073tu_2p1n4pa_1.png',
  },
  {
    title: 'AKKO 3096 ',
    price: 1200.0,
    img: 'https://anphat.com.vn/media/product/34372_akko_3096_world_tour_tokyo_r2.jpg',
  },
  {
    title: 'AKKO 3108 V2 Bilibili',
    price: 1300.0,
    img: 'https://anphat.com.vn/media/product/34705_akko_3108_v2_bilibili__1_.jpg',
  },
];

type CustomItem = {
  title: string;
  price: number;
  img: string;
};

const Item = ({item}: {item: CustomItem}) => (
  <TouchableOpacity
    style={styles.itemBox}
    onPress={() =>
      Alert.alert(
        'Giá của sản phẩm: $ ' + item.price + '\nTên của sản phẩm: ' + item.title,
      )
    }>
    <Image style={styles.image} source={{uri: item.img}} />
    <Text style={{marginTop: 30}}>{item.title}</Text>
    <Text style={{marginTop: 30, color: 'red'}}>${item.price}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [filterData, setFilterData] = useState(productData);

  function searchProduct(textToSearch: string){console.log(textToSearch);
    setFilterData(productData.filter(product => product.title.toLowerCase().includes(textToSearch.toLowerCase())))
  }

  const renderItem = ({item}: {item: CustomItem}) => <Item item={item} />;

  useEffect(()=>{
    const interval = setInterval(()  =>{
      setFilterData(_.shuffle(filterData))
    }, 5000)
    return () => {
      clearInterval(interval);
    };
  },[filterData.length, setFilterData])

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View>
        <TextInput
          onChangeText={(text) => searchProduct(text) }       
          style={styles.search}
          placeholder={' Tìm kiếm'}
        />
      </View>
      <FlatList
        numColumns={2}
        data={filterData}
        renderItem={renderItem}
        keyExtractor={item => item.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemBox: {
    backgroundColor: 'white',
    padding: 15,
    width: 170,
    height: 300,
    alignItems: 'baseline',
    borderWidth: 0.5,
    margin: 10,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: 120,
  },
  search: {
    backgroundColor: 'white',
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
  },
});

export default App;
