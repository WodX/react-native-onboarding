import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  Modal,
  Pressable,
  TextInput,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {updateUser} from '../slices/userSlice';

function ProfileScreen({navigation}) {
  const userData = useSelector(data => data.user);
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [user, setUser] = useState(userData);

  const handleSave = () => {
    setModalVisible(!modalVisible);
    dispatch(updateUser(user));
  };

  return (
    <SafeAreaView style={styles.container}>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View>
              <TextInput
                value={user.name}
                style={styles.input}
                onChangeText={text => setUser({...user, name: text})}
              />
              <TextInput
                value={user.email}
                style={styles.input}
                onChangeText={text => setUser({...user, email: text})}
              />
              <TextInput
                value={user.description}
                style={styles.input}
                onChangeText={text => setUser({...user, description: text})}
                multiline
              />
            </View>
            <Pressable
              style={[styles.button, styles.buttonEdit]}
              onPress={handleSave}>
              <Text style={styles.textStyle}>Save</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <View style={styles.header}>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/user.png')} style={styles.image} />
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    minWidth: 100,
    marginVertical: 5,
  },
  buttonClose: {
    backgroundColor: '#f08080',
  },
  buttonEdit: {
    backgroundColor: '#277da1',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    padding: 10,
    backgroundColor: '#ced4da',
    borderRadius: 10,
    width: 300,
    marginVertical: 10,
  },
});

export default ProfileScreen;
