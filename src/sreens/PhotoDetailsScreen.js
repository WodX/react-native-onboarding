import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {removeImage} from '../slices/imageSlice';
import {updateUser, updateImage} from '../slices/userSlice';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import Button from '../styles/buttons';

function PhotoDetailsScreen({navigation, route: {params}}) {
  const user = useSelector(data => data.user);
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (params.uri === user.image) {
      dispatch(updateImage({image: ''}));
    }
    dispatch(removeImage(params.uri));
    navigation.navigate('Gallery');
  };

  const handleAdd = () => {
    dispatch(updateUser({image: params.uri}));
    navigation.navigate('Gallery');
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: params.uri}} />
      <Text style={styles.text}>
        <Text style={styles.bold}>Name: </Text>
        {params.fileName}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>Size: </Text>
        {params.fileSize}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>URI: </Text>
        {params.uri}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>Width: </Text>
        {params.width}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.bold}>Height: </Text>
        {params.height}
      </Text>
      <View style={styles.buttonsContainer}>
        <Pressable onPress={handleDelete} style={Button.close}>
          <Text style={Button.text}>Delete</Text>
        </Pressable>
        <Pressable onPress={handleAdd} style={Button.normal}>
          <Text style={Button.text}>Add Profile photo</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    alignSelf: 'flex-start',
  },
  bold: {fontWeight: 'bold'},
  image: {
    width: 300,
    height: 300,
    marginVertical: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
});

export default PhotoDetailsScreen;
