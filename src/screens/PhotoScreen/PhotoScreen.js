import {useFocusEffect} from '@react-navigation/core';
import {launchCamera} from 'react-native-image-picker';
import {useDispatch} from 'react-redux';
import {addImage} from '../../store/slices/imageSlice';

function PhotoScreen({navigation}) {
  const dispatch = useDispatch();

  const callback = response => {
    if (response.didCancel) {
      navigation.goBack();
      return;
    }
    dispatch(addImage(response));
    navigation.navigate('Confirm', {id: response.uri});
  };

  useFocusEffect(() => {
    launchCamera({mediaType: 'photo', saveToPhotos: true}, callback);
  });

  return null;
}

export default PhotoScreen;
