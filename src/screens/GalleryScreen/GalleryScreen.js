import * as React from 'react';
import {SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import {Gallery, NoImage} from '../../components';
import styles from './GalleryScreen.styles';

function GalleryScreen({navigation}) {
  const current_user = useSelector(data => data.user);
  const images = useSelector(data =>
    data.image.items.filter(image => image.user_id === current_user.id),
  );
  return (
    <SafeAreaView style={styles.safeView}>
      {images.length > 0 ? (
        <Gallery
          data={images}
          onPressItem={image => {
            navigation.navigate('PhotoDetails', image.uri);
          }}
        />
      ) : (
        <NoImage />
      )}
    </SafeAreaView>
  );
}

export default GalleryScreen;
