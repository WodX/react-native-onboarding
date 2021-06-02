import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Explore,
  GalleryScreen,
  PhotoDetailsScreen,
  ShowAlbum,
} from '../screens';
import useGuest from '../hooks/useGuest';

const Stack = createStackNavigator();

function GalleryRoute() {
  const isGuest = useGuest();
  return (
    <Stack.Navigator initialRouteName={!isGuest ? GalleryScreen : Explore}>
      {!isGuest && (
        <>
          <Stack.Screen
            name="Gallery"
            component={GalleryScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen name="ShowAlbum" component={ShowAlbum} />
        </>
      )}
      <Stack.Screen name="Explore" component={Explore} />
      <Stack.Screen name="PhotoDetails" component={PhotoDetailsScreen} />
    </Stack.Navigator>
  );
}

export default GalleryRoute;
