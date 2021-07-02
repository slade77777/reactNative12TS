/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
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

const data = [
  {
    name: 'tai nghe',
    content: '172k san pham',
    imageUrl:
      'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg',
  },
  {
    name: 'quan ao',
    content: '50k san pham',
    imageUrl:
      'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg',
  },
  {
    name: 'may tinh',
    content: '20k san pham',
    imageUrl:
      'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg',
  },
  {
    name: '123',
    content: '500k san pham',
    imageUrl:
      'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg',
  },
];

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ListProduct data={data} />
    </SafeAreaView>
  );
};

export default App;
