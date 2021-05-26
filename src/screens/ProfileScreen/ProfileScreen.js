import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import ModalForm from '../../components/ModalForm';
import {updateUser} from '../../store/slices/userSlice';
import Button from '../../styles/buttons';
import styles from './ProfileScreen.styles';
import {launchCamera} from 'react-native-image-picker';
import {addImage} from '../../store/slices/imageSlice';

function ProfileScreen() {
  const user = useSelector(data => data.user);
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);

  const handleSave = newData => {
    setModalVisible(!modalVisible);
    dispatch(updateUser(newData));
  };

  const handleImage = type => {
    launchCamera({mediaType: 'photo', saveToPhotos: true}, response => {
      if (response.didCancel) {
        return;
      }
      dispatch(addImage(response));
      dispatch(updateUser({[type]: response.uri}));
    });
  };

  const backgrounds = [
    require('../../assets/bg1.jpg'),
    require('../../assets/bg2.jpg'),
    require('../../assets/bg3.jpg'),
    require('../../assets/bg4.jpg'),
    require('../../assets/bg5.jpg'),
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ModalForm
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        handleClose={() => setModalVisible(!modalVisible)}
        handleSave={handleSave}
        data={user}
      />

      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => handleImage('cover')}
          style={{width: '100%'}}>
          <Image
            source={
              user.cover
                ? {uri: user.cover}
                : backgrounds[Math.floor(Math.random() * backgrounds.length)]
            }
            style={styles.cover}
          />
        </TouchableOpacity>
        <View style={styles.imageContainer}>
          <TouchableOpacity
            onPress={() => handleImage('image')}
            style={styles.imageLink}>
            <Image
              source={
                user.image
                  ? {uri: user.image}
                  : require('../../assets/user.png')
              }
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
        <Text style={styles.description}>{user.description}</Text>
        <Pressable
          style={Button.normal}
          onPress={() => setModalVisible(!modalVisible)}>
          <Text style={Button.text}>Edit Profile</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default ProfileScreen;
