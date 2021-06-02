import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PhotoConfirm, PhotoScreen} from '../screens';

const Stack = createStackNavigator();

function PhotoRoute() {
  return (
    <Stack.Navigator initialRouteName={PhotoScreen}>
      <Stack.Screen
        name="Photo"
        component={PhotoScreen}
        options={{headerShown: false, unmountOnBlur: true}}
      />
      <Stack.Screen
        name="Confirm"
        component={PhotoConfirm}
        options={{title: 'Photo', headerLeft: null}}
      />
    </Stack.Navigator>
  );
}

export default PhotoRoute;
