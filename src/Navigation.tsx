import React, {FC, useEffect} from 'react';
import Survey1 from './screens/Survey/Survey1';
import Survey2 from './screens/Survey/Survey2';
import Survey3 from './screens/Survey/Survey3';
import HomeScreen from './screens/HomeScreen';
import Login from './screens/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LOGIN} from './redux/actionTypes';
import UserScreen from './screens/UserScreen';

const Navigation: FC = () => {
  useEffect(() => {
    getUserCache();
  }, []);
  const dispatch = useDispatch();

  const getUserCache = async () => {
    try {
      const value = await AsyncStorage.getItem('@user_data');
      if (value) {
        const userData = JSON.parse(value);
        dispatch({
          type: LOGIN,
          payload: {
            name: userData.username,
            email: userData.email,
          },
        });
      }
    } catch (e) {
      // error reading value
    }
  };
  const user = useSelector(store => store?.userReducer);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user.name ? (
          <>
            <Stack.Screen name="User" component={UserScreen} />
            <Stack.Screen name="Survey1" component={Survey1} />
            <Stack.Screen name="Survey2" component={Survey2} />
            <Stack.Screen name="Survey3" component={Survey3} />
            <Stack.Screen name="Home" component={HomeScreen} />
          </>
        ) : (
          <Stack.Screen name="Login" component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
