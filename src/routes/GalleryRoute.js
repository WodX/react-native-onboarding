import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {GalleryScreen, PhotoDetailsScreen} from '../screens';

const Stack = createStackNavigator();

function GalleryRoute() {
  return (
    <Stack.Navigator initialRouteName={GalleryScreen}>
      <Stack.Screen
        name="Gallery"
        component={GalleryScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="PhotoDetails" component={PhotoDetailsScreen} />
    </Stack.Navigator>
  );
}

export default GalleryRoute;
