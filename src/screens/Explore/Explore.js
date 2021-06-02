import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Gallery} from '../../components';
import {fetchImages} from '../../store/slices/imageSlice';
import styles from './Explore.styles';

const Explore = ({navigation}) => {
  const public_images = useSelector(data =>
    data.image.items.filter(img => img.isPrivate === false),
  );
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
        data={[...images, ...public_images]}
        onPressItem={image => {
          navigation.navigate('PhotoDetails', {url: image.url, uri: image.uri});
        }}
        sort={false}
        filter={false}
      />
    </SafeAreaView>
  );
};

export default Explore;
