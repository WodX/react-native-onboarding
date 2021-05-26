import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {LoginScreen} from '../screens';
import HomeRoute from './HomeRoute';

const Stack = createStackNavigator();

function MainRoute() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={LoginScreen}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeRoute} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainRoute;
