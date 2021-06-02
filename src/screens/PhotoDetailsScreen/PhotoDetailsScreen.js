import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {removeImage} from '../../store/slices/imageSlice';
import {updateUser} from '../../store/slices/usersSlice';
import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Button from '../../styles/buttons';
import styles from './PhotoDetailsScreen.styles';
import useRefresh from '../../hooks/useRefresh';
import useGuest from '../../hooks/useGuest';
import {ModalView} from '../../components';

function PhotoDetailsScreen({navigation, route: {params}}) {
  useRefresh();
  const [visible, setVisible] = useState(false);
  const user = useSelector(data => data.user);
  const isGuest = useGuest();
  const [image_data] = useSelector(data => {
    if (params.url) {
      return data.image.api.filter(
        image_inside => image_inside.url === params.url,
      );
    }
    return data.image.items.filter(
      image_inside => image_inside.uri === params.uri,
    );
  });
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
    dispatch(updateUser({id: user.id, image: image.uri || image.url}));
    navigation.navigate('Gallery');
    navigation.navigate('Profile');
  };

  const handleAddCover = () => {
    dispatch(updateUser({id: user.id, cover: image.uri || image.url}));
    navigation.navigate('Gallery');
    navigation.navigate('Profile');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <ModalView
          visible={visible}
          uri={image.uri || image.url}
          onSwipeDown={() => setVisible(false)}
        />
        <TouchableOpacity onPress={() => setVisible(true)}>
          <Image style={styles.image} source={{uri: image.uri || image.url}} />
        </TouchableOpacity>
        <Text style={styles.text}>
          <Text style={styles.bold}>Name: </Text>
          {image.fileName || image.name}
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
          <Text style={styles.bold}>Created at: </Text>
          {image.created_at && Date(image.created_at)}
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
        {!isGuest && (
          <View style={styles.buttonsContainer}>
            {user.id === image.user_id && (
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
            )}
            <Pressable onPress={handleAddProfile} style={Button.normal}>
              <Text style={Button.text}>Add to Profile Photo</Text>
            </Pressable>
            <Pressable onPress={handleAddCover} style={Button.normal}>
              <Text style={Button.text}>Add to Cover Photo</Text>
            </Pressable>
            {user.id === image.user_id && (
              <Pressable onPress={handleDelete} style={Button.close}>
                <Text style={Button.text}>Delete</Text>
              </Pressable>
            )}
          </View>
        )}
      </View>
    </ScrollView>
  );
}

export default PhotoDetailsScreen;
