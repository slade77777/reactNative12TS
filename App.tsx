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
import {SafeAreaView} from 'react-native';
import store from './src/redux/store';
import {Provider} from 'react-redux';

import Navigation from './src/Navigation';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <SafeAreaView
          style={{
            backgroundColor: 'white',
            flex: 1,
          }}>
          <Navigation />
        </SafeAreaView>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
