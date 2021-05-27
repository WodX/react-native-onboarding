import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../screens';
import {RegisterScreen} from '../screens';

const Stack = createStackNavigator();

function LoginRoute() {
  return (
    <Stack.Navigator
      initialRouteName={LoginScreen}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

export default LoginRoute;
