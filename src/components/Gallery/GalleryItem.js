import * as React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';

function GalleryItem({image, onPress}) {
  return (
    <TouchableOpacity
      style={styles.container}
      key={image.uri || image.url}
      onPress={onPress}>
      <Image style={styles.image} source={{uri: image.uri || image.url}} />
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
    borderRadius: 5,
  },
});

export default GalleryItem;
