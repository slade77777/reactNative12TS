/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Alert,
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Product from './src/components/Product';
import ListProduct from './src/components/ListProduct';
import ColorView from './src/components/ColorView';

// const data = [
//   {
//     name: 'tai nghe',
//     content: '172k san pham',
//     imageUrl:
//       'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg',
//   },
//   {
//     name: 'quan ao',
//     content: '50k san pham',
//     imageUrl:
//       'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg',
//   },
//   {
//     name: 'may tinh',
//     content: '20k san pham',
//     imageUrl:
//       'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg',
//   },
//   {
//     name: '123',
//     content: '500k san pham',
//     imageUrl:
//       'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg',
//   },
// ];

const colorList = [
  {
    backgroundColor: 'red',
    text: 'red',
  },
  {
    backgroundColor: 'green',
    text: 'green',
  },
  {
    backgroundColor: 'blue',
    text: 'blue',
  },
  {
    backgroundColor: 'yellow',
    text: 'yellow',
  },
  {
    backgroundColor: 'black',
    text: 'black',
  },
  {
    backgroundColor: 'pink',
    text: 'pink',
  },
];

const App = () => {
  const [backgroundStyle, setBackgroundColor] = useState('white');

  function changeColorBackground(backgroundColor: string) {
    setBackgroundColor(backgroundColor);
  }

  return (
    <SafeAreaView style={{backgroundColor: backgroundStyle, flex: 1}}>
      <FlatList
        data={colorList}
        renderItem={({item}) => (
          <ColorView
            changeColorBackground={changeColorBackground}
            backgroundColor={item.backgroundColor}
            text={item.text}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default App;
