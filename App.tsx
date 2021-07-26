/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import {Survey1} from './src/screens/Survey/Survey1';
import {Survey2} from './src/screens/Survey/Survey2';
import {Survey3} from './src/screens/Survey/Survey3';
import Login from './src/screens/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

export type UserProps = {
  userInfo: {
    name: string;
    email: string;
  };
  login: (val: any) => void;
};

export const SurveyContext = React.createContext<AnswerProps>({});
export const UserContext = React.createContext<UserProps>({});

const App = () => {
  const [survey, setSurvey] = useState(defaultValue);
  const [user, setUser] = useState({
    name: '',
    email: '',
  });

  useEffect(async () => {
    try {
      const value = await AsyncStorage.getItem('@user_data');
      if (value !== null) {
        const userData = JSON.parse(value);
        setUser(userData);
      }
    } catch (e) {
      // error reading value
    }
  }, []);

  async function loginUser(userData: any) {
    setUser(userData);
    try {
      await AsyncStorage.setItem('@user_data', JSON.stringify(userData));
    } catch (e) {
      console.log(e);
      // saving error
    }
  }

  return (
    <SurveyContext.Provider value={{answers: survey, changeAnswer: setSurvey}}>
      <UserContext.Provider value={{userInfo: user, login: loginUser}}>
        <SafeAreaView
          style={{
            backgroundColor: 'white',
            flex: 1,
          }}>
          <NavigationContainer>
            <Stack.Navigator>
              {user.name ? (
                <>
                  <Stack.Screen name="Survey1" component={Survey1} />
                  <Stack.Screen name="Survey2" component={Survey2} />
                  <Stack.Screen name="Survey3" component={Survey3} />
                  <Stack.Screen name="Home" component={HomeScreen} />
                </>
              ) : (
                <>
                  <Stack.Screen name="Login" component={Login} />
                </>
              )}
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </UserContext.Provider>
    </SurveyContext.Provider>
  );
};

export default App;
