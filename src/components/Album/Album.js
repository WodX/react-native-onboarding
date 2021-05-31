import React, {useState} from 'react';
import {View, Text, Pressable, Modal, TextInput} from 'react-native';
import {useDispatch} from 'react-redux';
import {addAlbum} from '../../store/slices/albumSlice';
import Button from '../../styles/buttons';
import styles from './Album.styles';

const MyModal = ({modalVisible, handleClose, handleCreate, ...props}) => {
  const [name, setName] = useState();
  console.log(name);

  return (
    <Modal {...props}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TextInput
            placeholder="Name"
            placeholderTextColor="#fff"
            style={styles.input}
            onChangeText={setName}
          />
          <Pressable style={Button.normal} onPress={() => handleCreate({name})}>
            <Text style={Button.text}>Add Album</Text>
          </Pressable>
          <Pressable style={Button.close} onPress={handleClose}>
            <Text style={Button.text}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

function Album({userId}) {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);

  const handleCreate = ({name = ''}) => {
    setModalVisible(!modalVisible);
    dispatch(addAlbum({name: name, user_id: userId}));
  };

  const handleClose = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <MyModal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        handleClose={handleClose}
        handleCreate={handleCreate}
      />
      <View style={styles.buttonContainer}>
        <Pressable
          style={Button.normal}
          onPress={() => setModalVisible(!modalVisible)}>
          <Text style={Button.text}>Create New Album</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Album;
