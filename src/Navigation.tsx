import React, {FC} from 'react';
import Survey1 from './screens/Survey/Survey1';
import Survey2 from './screens/Survey/Survey2';
import Survey3 from './screens/Survey/Survey3';
import HomeScreen from './screens/HomeScreen';
import Login from './screens/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import {connect} from 'react-redux';

const Navigation: FC<{user: {name: string; email: string}}> = ({user}) => {
  return (
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
          <Stack.Screen name="Login" component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default connect(store => {
  return {user: store?.userReducer};
})(Navigation);
