import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Modal,
  Pressable,
  TextInput,
} from 'react-native';

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
          <Pressable
            style={[styles.button, styles.buttonSave]}
            onPress={() => handleSave(user)}>
            <Text style={styles.textStyle}>Save</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={handleClose}>
            <Text style={styles.textStyle}>Close</Text>
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
  buttonSave: {
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

export default ModalForm;
