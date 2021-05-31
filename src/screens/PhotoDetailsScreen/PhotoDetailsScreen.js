import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {removeImage} from '../../store/slices/imageSlice';
import {updateUser} from '../../store/slices/usersSlice';
import {View, Text, Image, Pressable, ScrollView} from 'react-native';
import Button from '../../styles/buttons';
import styles from './PhotoDetailsScreen.styles';
import useRefresh from '../../hooks/useRefresh';

function PhotoDetailsScreen({navigation, route: {params}}) {
  useRefresh();
  const user = useSelector(data => data.user);
  const [image_data] = useSelector(data =>
    data.image.items.filter(image_inside => image_inside.uri === params),
  );
  const image = image_data ? image_data : {};
  const dispatch = useDispatch();

  const handleDelete = () => {
    navigation.navigate('Gallery');
    if (image.uri === user.image) {
      dispatch(updateUser({id: user.id, image: ''}));
    }
    if (image.uri === user.cover) {
      dispatch(updateUser({id: user.id, cover: ''}));
    }
    dispatch(removeImage(image.uri));
  };

  const handleAddProfile = () => {
    dispatch(updateUser({id: user.id, image: image.uri}));
    navigation.navigate('Gallery');
    navigation.navigate('Profile');
  };

  const handleAddCover = () => {
    dispatch(updateUser({id: user.id, cover: image.uri}));
    navigation.navigate('Gallery');
    navigation.navigate('Profile');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: image.uri}} />
        <Text style={styles.text}>
          <Text style={styles.bold}>Name: </Text>
          {image.fileName}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>Description: </Text>
          {image.description}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>Location: </Text>
          {image.location && image.location.status}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>Labels: </Text>
          {image.labels && image.labels.join(', ')}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>Is Private: </Text>
          {JSON.stringify(image.isPrivate)}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>Size: </Text>
          {image.fileSize}
        </Text>
        <Text style={styles.text}>
          <Text style={styles.bold}>Dimensions: </Text>
          {image.width} x {image.height}
        </Text>
        <View style={styles.buttonsContainer}>
          <Pressable
            onPress={() => {
              navigation.navigate('Photo', {
                screen: 'Confirm',
                params: {id: image.uri, backButton: true},
              });
            }}
            style={Button.normal}>
            <Text style={Button.text}>Edit Image</Text>
          </Pressable>
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
    </ScrollView>
  );
}

export default PhotoDetailsScreen;
