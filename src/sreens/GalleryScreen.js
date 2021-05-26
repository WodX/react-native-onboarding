import * as React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';

function GalleryScreen({navigation}) {
  const images = useSelector(data => data.image.items);
  return (
    <SafeAreaView style={styles.safeView}>
      <ScrollView>
        <View style={[styles.container]}>
          {images.length > 0 ? (
            images.map(image => {
              return (
                <TouchableOpacity
                  style={styles.imageContainer}
                  key={image.uri}
                  onPress={() => {
                    navigation.navigate('PhotoDetails', image);
                  }}>
                  <Image style={styles.image} source={{uri: image.uri}} />
                </TouchableOpacity>
              );
            })
          ) : (
            <Text>No Images</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
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

export default GalleryScreen;
