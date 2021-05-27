import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeRoute from './HomeRoute';
import LoginRoute from './LoginRoute';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

function MainRoute() {
  const user = useSelector(data => data.user);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!user.id ? (
          <Stack.Screen name="Login" component={LoginRoute} />
        ) : (
          <Stack.Screen name="Home" component={HomeRoute} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainRoute;
