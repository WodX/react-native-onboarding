import React, {useState} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Gallery} from '../../components';

function ShowAlbum({navigation, route: {params}}) {
  const current_user = useSelector(data => data.user);
  const images = useSelector(data =>
    data.image.items.filter(image => image.album === params.id),
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <Gallery
        data={images}
        onPressItem={image => {
          navigation.navigate('PhotoDetails', image.uri);
        }}
      />
    </SafeAreaView>
  );
}

export default ShowAlbum;