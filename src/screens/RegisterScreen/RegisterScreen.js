import React, {useState} from 'react';
import {
  Text,
  Pressable,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  View,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {ProfilePhoto} from '../../components';
import {createUser} from '../../store/slices/usersSlice';
import {launchCamera} from 'react-native-image-picker';
import Button from '../../styles/buttons';
import styles from './RegisterScreen.styles';
import {emailIsValid} from '../../helpers/helper';

function RegisterScreen({navigation}) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState();

  const handleRegister = () => {
    if (!email || !password) {
      setError('Email and Password are required.');
      return;
    }
    if (!emailIsValid(email)) {
      setError('Email is not valid.');
      return;
    }
    dispatch(
      createUser({
        email: email.toLowerCase(),
        name,
        image,
        password,
      }),
    );
    navigation.navigate('Login');
  };

  const handleImage = () => {
    launchCamera({mediaType: 'photo', saveToPhotos: true}, response => {
      if (response.didCancel) {
        return;
      }
      setImage(response.uri);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior="position" style={styles.content}>
        <ProfilePhoto
          image={image}
          onPress={handleImage}
          style={styles.image}
        />

        <TextInput
          placeholder="Name"
          placeholderTextColor="#fff"
          style={styles.input}
          onChangeText={setName}
        />

        <TextInput
          placeholder="Email"
          placeholderTextColor="#fff"
          value={email.toLowerCase()}
          style={[styles.input, error && !email && styles.error]}
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor="#fff"
          style={[styles.input, error && !password && styles.error]}
          secureTextEntry
          onChangeText={setPassword}
        />
        <Text style={styles.errorMessage}>{error}</Text>
        <Pressable style={Button.normal} onPress={handleRegister}>
          <Text style={Button.text}>Register</Text>
        </Pressable>
        <View style={styles.textContainer}>
          <Text>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.link}>Login.</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default RegisterScreen;
