import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import ModalForm from '../components/ModalForm';
import {updateUser} from '../slices/userSlice';

function ProfileScreen({navigation}) {
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
          <Image
            source={
              user.image ? {uri: user.image} : require('../assets/user.png')
            }
            style={styles.image}
          />
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
        <Text style={styles.description}>{user.description}</Text>
        <Pressable
          style={[styles.button, styles.buttonEdit]}
          onPress={() => setModalVisible(!modalVisible)}>
          <Text style={styles.textStyle}>Edit Profile</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6d6875',
    marginBottom: 50,
  },
  imageContainer: {
    position: 'absolute',
    bottom: -50,
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: '#ced4da',
    borderColor: 'white',
    borderWidth: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  content: {
    flex: 2,
    alignItems: 'center',
    padding: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: '500',
    color: '#343a40',
  },
  email: {
    color: '#adb5bd',
  },
  description: {
    marginVertical: 35,
    color: '#343a40',
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    minWidth: 100,
    marginVertical: 5,
  },
  buttonEdit: {
    backgroundColor: '#277da1',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ProfileScreen;
