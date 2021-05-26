import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {removeImage} from '../../store/slices/imageSlice';
import {
  updateUser,
  updateImage,
  updateCover,
} from '../../store/slices/userSlice';
import {View, Text, Image, Pressable} from 'react-native';
import Button from '../../styles/buttons';
import styles from './PhotoDetailsScreen.styles';

function PhotoDetailsScreen({navigation, route: {params}}) {
  const user = useSelector(data => data.user);
  const [image_data] = useSelector(data =>
    data.image.items.filter(image_inside => image_inside.uri === params),
  );
  const image = image_data ? image_data : {};
  const dispatch = useDispatch();

  const handleDelete = () => {
    navigation.navigate('Gallery');
    if (image.uri === user.image) {
      dispatch(updateImage({image: ''}));
    }
    if (image.uri === user.cover) {
      dispatch(updateCover({cover: ''}));
    }
    dispatch(removeImage(image.uri));
  };

  const handleAddProfile = () => {
    dispatch(updateUser({image: image.uri}));
    navigation.navigate('Profile');
  };

  const handleAddCover = () => {
    dispatch(updateUser({cover: image.uri}));
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: image.uri}} />
      <Text style={styles.text}>
        <Text style={styles.bold}>Name: </Text>
        {image.fileName}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>Size: </Text>
        {image.fileSize}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>URI: </Text>
        {image.uri}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>Width: </Text>
        {image.width}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>Height: </Text>
        {image.height}
      </Text>
      <View style={styles.buttonsContainer}>
        <Pressable onPress={handleAddProfile} style={Button.normal}>
          <Text style={Button.text}>Add to Profile Photo</Text>
        </Pressable>
        <Pressable onPress={handleAddCover} style={Button.normal}>
          <Text style={Button.text}>Add to Cover Photo</Text>
        </Pressable>
        <Pressable onPress={handleDelete} style={Button.close}>
          <Text style={Button.text}>Delete</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default PhotoDetailsScreen;
