import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet, View} from 'react-native';
import {ProfileScreen} from '../screens';
import GalleryRoute from './GalleryRoute';
import PhotoRoute from './PhotoRoute';
import useGuest from '../hooks/useGuest';

const Tab = createBottomTabNavigator();

function HomeRoute() {
  const isGuest = useGuest();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarOptions: {
          showIcon: true,
        },
      }}>
      <Tab.Screen
        name="Gallery"
        component={GalleryRoute}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../assets/gallery.png')}
              style={styles.image}
            />
          ),
        }}
      />
      {!isGuest && (
        <Tab.Screen
          name="Photo"
          component={PhotoRoute}
          tabBarOptions={{showLabel: false}}
          options={{
            tabBarIcon: () => (
              <View style={styles.photoContainer}>
                <Image
                  source={require('../assets/photo.png')}
                  style={styles.photo}
                />
              </View>
            ),
          }}
        />
      )}
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../assets/user.png')}
              style={styles.image}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = new StyleSheet.create({
  image: {width: 20, height: 20},
  photo: {
    width: '100%',
    height: '100%',
    maxWidth: 35,
    maxHeight: 35,
  },
  photoContainer: {
    backgroundColor: 'white',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
});

export default HomeRoute;
