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
import {logoutUser} from '../../store/slices/userSlice';
import useRefresh from '../../hooks/useRefresh';
import {updateUser} from '../../store/slices/usersSlice';
import Button from '../../styles/buttons';
import styles from './ProfileScreen.styles';
import {launchCamera} from 'react-native-image-picker';
import {addImage} from '../../store/slices/imageSlice';
import {ProfilePhoto, ModalForm} from '../../components';

function ProfileScreen() {
  useRefresh();
  const current_user = useSelector(data => data.user);
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);

  const handleSave = ({name, email, description}) => {
    setModalVisible(!modalVisible);
    dispatch(updateUser({id: current_user.id, name, email, description}));
  };

  const handleImage = type => {
    launchCamera({mediaType: 'photo', saveToPhotos: true}, response => {
      if (response.didCancel) {
        return;
      }
      dispatch(addImage(response));
      dispatch(updateUser({id: current_user.id, [type]: response.uri}));
    });
  };

  const handleLogout = () => {
    dispatch(logoutUser());
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
        data={current_user}
      />

      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => handleImage('cover')}
          style={styles.coverContainer}>
          <Image
            source={
              current_user.cover
                ? {uri: current_user.cover}
                : backgrounds[Math.floor(Math.random() * backgrounds.length)]
            }
            style={styles.cover}
          />
        </TouchableOpacity>
        <ProfilePhoto
          image={current_user.image}
          style={styles.imageContainer}
          onPress={() => handleImage('image')}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.name}>{current_user.name}</Text>
        <Text style={styles.email}>{current_user.email}</Text>
        <Text style={styles.description}>{current_user.description}</Text>
        <Pressable
          style={Button.normal}
          onPress={() => setModalVisible(!modalVisible)}>
          <Text style={Button.text}>Edit Profile</Text>
        </Pressable>
        <Pressable style={Button.close} onPress={handleLogout}>
          <Text style={Button.text}>Log out</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default ProfileScreen;
