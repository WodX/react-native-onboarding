import React, {useState} from 'react';
import {Text, View, Modal, Pressable, TextInput} from 'react-native';
import { emailIsValid } from '../../helpers/helper';
import Button from '../../styles/buttons';
import styles from './ModalForm.styles';

function ModalForm({data, handleClose, handleSave, ...props}) {
  const [name, setName] = useState(data.name);
  const [email, setEmail] = useState(data.email);
  const [description, setDescription] = useState(data.description);
  const [error, setError] = useState();

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
              keyboardType="email-address"
              onChangeText={text => {
                if (!emailIsValid(text)) {
                  setError('Email is not valid.');
                  setEmail(text.toLowerCase());
                  return;
                }
                setError('');
                setEmail(text.toLowerCase());
              }}
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
          <Text style={styles.errorMessage}>{error}</Text>
          <Pressable
            style={[Button.normal, error && styles.error]}
            onPress={() => !error && handleSave({name, email, description})}>
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
