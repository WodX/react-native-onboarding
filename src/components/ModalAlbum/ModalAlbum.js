import React, {useState} from 'react';
import {View, Text, Pressable, Modal, TextInput} from 'react-native';
import Button from '../../styles/buttons';
import styles from './ModalAlbum.styles';

const ModalAlbum = ({modalVisible, handleClose, handleCreate, ...props}) => {
  const [name, setName] = useState('');

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
          <Pressable
            style={Button.normal}
            onPress={() => {
              handleCreate({name});
              setName('');
            }}>
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

export default ModalAlbum;
