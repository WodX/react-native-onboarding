import React, {useState} from 'react';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import GalleryItem from './GalleryItem';
import styles from './Gallery.styles';
import {Album, NoImage} from '../';

function Gallery({data, onPressItem}) {
  return (
    <View style={styles.flex1}>
      {data.length > 0 ? (
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
        <NoImage />
      )}
    </View>
  );
}

export default Gallery;
