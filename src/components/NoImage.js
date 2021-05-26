import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const NoImage = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/no-photo.png')} />
      <Text style={styles.text}>No Photos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 10,
  },
  text: {
    fontWeight: 'bold',
  },
});

export default NoImage;
