import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Modal,
  Pressable,
  TextInput,
} from 'react-native';
import Button from '../styles/buttons';

function ModalForm({data, handleClose, handleSave, ...props}) {
  const [user, setUser] = useState(data);

  return (
    <Modal {...props}>
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
          <Pressable style={Button.normal} onPress={() => handleSave(user)}>
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

const styles = StyleSheet.create({
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

export default ModalForm;
