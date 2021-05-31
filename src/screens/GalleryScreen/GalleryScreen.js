import React, {useState} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Album, Gallery} from '../../components';
import styles from './GalleryScreen.styles';

function GalleryScreen({navigation}) {
  const [isPhotos, setPhotos] = useState(true);
  const current_user = useSelector(data => data.user);
  const images = useSelector(data =>
    data.image.items.filter(image => image.user_id === current_user.id),
  );

  const handlePhotos = () => {
    setPhotos(true);
  };

  const handleAlbums = () => {
    setPhotos(false);
  };

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.options}>
        <TouchableOpacity onPress={handlePhotos} style={styles.button}>
          <Text style={[styles.text, !isPhotos && styles.active]}>Photos</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleAlbums} style={styles.button}>
          <Text style={[styles.text, isPhotos && styles.active]}>Albums</Text>
        </TouchableOpacity>
      </View>
      {isPhotos ? (
        <Gallery
          data={images}
          onPressItem={image => {
            navigation.navigate('PhotoDetails', image.uri);
          }}
        />
      ) : (
        <Album userId={current_user.id} navigation={navigation} />
      )}
      <TouchableOpacity
        style={styles.explore}
        onPress={() => navigation.navigate('Explore')}>
        <Image
          style={styles.image}
          source={require('../../assets/search.png')}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default GalleryScreen;
