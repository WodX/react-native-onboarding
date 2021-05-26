import * as React from 'react';
import {SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import Gallery from '../../components/Gallery';
import NoImage from '../../components/NoImage';
import styles from './GalleryScreen.styles';

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

export default GalleryScreen;
