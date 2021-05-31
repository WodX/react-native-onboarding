import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {useDispatch} from 'react-redux';
import {Gallery} from '../../components';
import {fetchImages} from '../../store/slices/imageSlice';
import styles from './Explore.styles';

const Explore = ({navigation}) => {
  const dispatch = useDispatch();
  const [images, setImages] = useState([]);

  useEffect(() => {
    dispatch(fetchImages()).then(result => {
      setImages(result.payload);
    });
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.safeView}>
      <Gallery
        data={images}
        onPressItem={image => {
          navigation.navigate('PhotoDetails', {url: image.url});
        }}
      />
    </SafeAreaView>
  );
};

export default Explore;
