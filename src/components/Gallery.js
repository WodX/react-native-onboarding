import * as React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

function Gallery({data, onPressItem}) {
  return (
    <ScrollView>
      <View style={[styles.container]}>
        {data.map(image => {
          return (
            <TouchableOpacity
              style={styles.imageContainer}
              key={image.uri}
              onPress={() => {
                onPressItem(image);
              }}>
              <Image style={styles.image} source={{uri: image.uri}} />
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 15,
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  imageContainer: {
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
