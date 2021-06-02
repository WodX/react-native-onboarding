import React, {useState} from 'react';
import {
  Text,
  Pressable,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {loginUser} from '../../store/slices/userSlice';
import Button from '../../styles/buttons';
import styles from './LoginScreen.styles';

function LoginScreen({navigation}) {
  const users = useSelector(data => data.users.users);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      setError(true);
      return;
    }

    const [user] = users.filter(inside_user => {
      if (email === inside_user.email && password === inside_user.password) {
        return inside_user;
      }
    });

    if (!user) {
      setErrorMessage('Invalid Email or Password');
      return;
    }

    dispatch(loginUser(user));
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior="position" style={styles.content}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/logo.png')}
            style={styles.image}
          />
        </View>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#fff"
          style={[styles.input, error && !email && styles.error]}
          keyboardType="email-address"
          onChangeText={text => setEmail(text)}
          onFocus={() => setErrorMessage('')}
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor="#fff"
          style={[styles.input, error && !password && styles.error]}
          secureTextEntry
          onChangeText={text => setPassword(text)}
          onFocus={() => setErrorMessage('')}
        />
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <Pressable style={Button.normal} onPress={handleLogin}>
          <Text style={Button.text}>Login</Text>
        </Pressable>
        <View style={styles.textContainer}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.link}>Resgister.</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.textContainer}>
          <Text>Login as a </Text>
          <TouchableOpacity
            onPress={() =>
              dispatch(
                loginUser({
                  id: 'guest',
                  email: 'guest@email.com',
                  name: 'Guest',
                  password: '123',
                }),
              )
            }>
            <Text style={styles.link}>Guest</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default LoginScreen;
