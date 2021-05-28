import React, {useState} from 'react';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import GalleryItem from './GalleryItem';
import styles from './Gallery.styles';

function Gallery({data, onPressItem}) {
  const [isPhotos, setPhotos] = useState(true);

  const handlePhotos = () => {
    setPhotos(true);
  };

  const handleAlbums = () => {
    setPhotos(false);
  };

  return (
    <View style={styles.flex1}>
      <View style={styles.options}>
        <TouchableOpacity onPress={handlePhotos} style={styles.button}>
          <Text style={styles.text}>Photos</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleAlbums} style={styles.button}>
          <Text style={styles.text}>Albums</Text>
        </TouchableOpacity>
      </View>
      {isPhotos ? (
        <ScrollView>
          <View style={[styles.container]}>
            {data.map(image => {
              return (
                <GalleryItem
                  key={image.uri}
                  image={image}
                  onPress={() => {
                    onPressItem(image);
                  }}
                />
              );
            })}
          </View>
        </ScrollView>
      ) : (
        <Text>Albums</Text>
      )}
    </View>
  );
}

export default Gallery;
