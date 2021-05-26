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

function ProfileScreen() {
  const user = useSelector(data => data.user);
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);

  const handleSave = newData => {
    setModalVisible(!modalVisible);
    dispatch(updateUser(newData));
  };

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
        <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.imageLink}>
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
