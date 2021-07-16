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
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import {Survey1} from './src/screens/Survey/Survey1';
import {Survey2} from './src/screens/Survey/Survey2';
import {Survey3} from './src/screens/Survey/Survey3';

const Stack = createStackNavigator();
const defaultValue = {
  answer1: '',
  answer2: '',
  answer3: '',
};

export type AnswerProps = {
  answers: {
    answer1?: string;
    answer2?: string;
    answer3?: string;
  };
  changeAnswer: (val: any) => void;
};

export const SurveyContext = React.createContext<AnswerProps>({});

const App = () => {
  const [survey, setSurvey] = useState(defaultValue);

  return (
    <SurveyContext.Provider value={{answers: survey, changeAnswer: setSurvey}}>
      <SafeAreaView
        style={{
          backgroundColor: 'white',
          flex: 1,
        }}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Survey1" component={Survey1} />
            <Stack.Screen name="Survey2" component={Survey2} />
            <Stack.Screen name="Survey3" component={Survey3} />
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SurveyContext.Provider>
  );
};

export default App;
