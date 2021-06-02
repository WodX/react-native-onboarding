import React from 'react';
import {Pressable, SafeAreaView, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Gallery} from '../../components';
import {removeAlbum} from '../../store/slices/albumSlice';
import Button from '../../styles/buttons';

function ShowAlbum({navigation, route: {params}}) {
  const dispatch = useDispatch();
  const images = useSelector(data =>
    data.image.items.filter(image => image.album === params.id),
  );

  const handleDelete = () => {
    dispatch(removeAlbum(params));
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Gallery
        data={images}
        onPressItem={image => {
          navigation.navigate('PhotoDetails', {uri: image.uri});
        }}
      />
      <Pressable
        style={[Button.close, {marginBottom: 30}]}
        onPress={handleDelete}>
        <Text style={Button.text}>Delete Album</Text>
      </Pressable>
    </SafeAreaView>
  );
}

export default ShowAlbum;
