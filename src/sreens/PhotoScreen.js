import {useFocusEffect} from '@react-navigation/core';
import React from 'react';
import {launchCamera} from 'react-native-image-picker';
import GalleryScreen from './GalleryScreen';
import {useDispatch} from 'react-redux';
import {addImage} from '../slices/imageSlice';

function PhotoScreen({navigation}) {
  const dispatch = useDispatch();

  const callback = response => {
    if (response.didCancel) {
      navigation.goBack();
      return;
    }
    dispatch(addImage(response));
    navigation.goBack();
  };

  useFocusEffect(() => {
    launchCamera({mediaType: 'photo', saveToPhotos: true}, callback);
  });

  return null;
}

export default PhotoScreen;
