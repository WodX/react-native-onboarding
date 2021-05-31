import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Explore, GalleryScreen, PhotoDetailsScreen} from '../screens';

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
      <Stack.Screen name="Explore" component={Explore} />
    </Stack.Navigator>
  );
}

export default GalleryRoute;
