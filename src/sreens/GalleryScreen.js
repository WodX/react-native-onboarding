import * as React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import Gallery from '../components/Gallery';
import NoImage from '../components/NoImage';

function GalleryScreen({navigation}) {
  const images = useSelector(data => data.image.items);
  return (
    <SafeAreaView style={styles.safeView}>
      {images.length > 0 ? (
        <Gallery
          data={images}
          onPressItem={image => {
            navigation.navigate('PhotoDetails', image);
          }}
        />
      ) : (
        <NoImage />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
});

export default GalleryScreen;
