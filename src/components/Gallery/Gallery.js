import * as React from 'react';
import {View, ScrollView} from 'react-native';
import GalleryItem from './GalleryItem';
import styles from './Gallery.styles';

function Gallery({data, onPressItem}) {
  return (
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
  );
}

export default Gallery;
