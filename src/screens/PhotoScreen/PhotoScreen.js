import {useFocusEffect} from '@react-navigation/core';
import {launchCamera} from 'react-native-image-picker';

function PhotoScreen({navigation}) {
  const callback = response => {
    if (response.didCancel) {
      navigation.goBack();
      return;
    }
    navigation.navigate('Confirm', response);
  };

  useFocusEffect(() => {
    launchCamera({mediaType: 'photo', saveToPhotos: true}, callback);
  });

  return null;
}

export default PhotoScreen;
