import * as React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';

function Gallery({image, onPress}) {
  return (
    <TouchableOpacity
      style={styles.container}
      key={image.uri}
      onPress={onPress}>
      <Image style={styles.image} source={{uri: image.uri}} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    margin: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default Gallery;
