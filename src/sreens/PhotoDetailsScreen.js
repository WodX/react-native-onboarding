import React from 'react';
import {useDispatch} from 'react-redux';
import {removeImage} from '../slices/imageSlice';
import {updateUser} from '../slices/userSlice';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';

function PhotoDetailsScreen({navigation, route: {params}}) {
  const dispatch = useDispatch();

  const handleDelete = () => {
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
      <View style={{flexDirection: 'row'}}>
        <Pressable
          onPress={handleDelete}
          style={[styles.button, styles.buttonDelete]}>
          <Text style={styles.textButton}>Delete</Text>
        </Pressable>
        <Pressable onPress={handleAdd} style={styles.button}>
          <Text style={styles.textButton}>Add Profile photo</Text>
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
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    minWidth: 100,
    margin: 15,
    backgroundColor: '#277da1',
  },
  buttonDelete: {
    backgroundColor: '#f08080',
  },
  textButton: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PhotoDetailsScreen;
