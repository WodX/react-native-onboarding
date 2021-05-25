import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import GalleryScreen from '../sreens/GalleryScreen';
import ProfileScreen from '../sreens/ProfileScreen';
import {Image, StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator();

function HomeRoute() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarOptions: {
          showIcon: true,
        },
      }}>
      <Tab.Screen
        name="Gallery"
        component={GalleryScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../assets/gallery.png')}
              style={styles.image}
            />
          ),
        }}
      />
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
});

export default HomeRoute;
