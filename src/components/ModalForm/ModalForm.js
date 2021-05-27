import React, {useState} from 'react';
import {Text, View, Modal, Pressable, TextInput} from 'react-native';
import Button from '../../styles/buttons';
import styles from './ModalForm.styles';

function ModalForm({data, handleClose, handleSave, ...props}) {
  const [name, setName] = useState(data.name);
  const [email, setEmail] = useState(data.email);
  const [description, setDescription] = useState(data.description);

  return (
    <Modal {...props}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View>
            <TextInput
              value={name}
              placeholder="Name"
              placeholderTextColor="#fff"
              style={styles.input}
              onChangeText={text => setName(text)}
            />
            <TextInput
              value={email}
              placeholder="Email"
              placeholderTextColor="#fff"
              style={styles.input}
              onChangeText={text => setEmail(text)}
            />
            <TextInput
              value={description}
              placeholder="Description"
              placeholderTextColor="#fff"
              style={styles.input}
              onChangeText={text => setDescription(text)}
              multiline
            />
          </View>
          <Pressable
            style={Button.normal}
            onPress={() => handleSave({name, email, description})}>
            <Text style={Button.text}>Save</Text>
          </Pressable>
          <Pressable style={Button.close} onPress={handleClose}>
            <Text style={Button.text}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

export default ModalForm;
