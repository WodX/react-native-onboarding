import React from 'react';
import {SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import {Gallery} from '../../components';

function ShowAlbum({navigation, route: {params}}) {
  const images = useSelector(data =>
    data.image.items.filter(image => image.album === params.id),
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <Gallery
        data={images}
        onPressItem={image => {
          navigation.navigate('PhotoDetails', {uri: image.uri});
        }}
      />
    </SafeAreaView>
  );
}

export default ShowAlbum;
