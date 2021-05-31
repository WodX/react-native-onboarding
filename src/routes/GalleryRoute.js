import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Explore,
  GalleryScreen,
  PhotoDetailsScreen,
  ShowAlbum,
} from '../screens';

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
      <Stack.Screen name="ShowAlbum" component={ShowAlbum} />
    </Stack.Navigator>
  );
}

export default GalleryRoute;
