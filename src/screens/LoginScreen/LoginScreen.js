import * as React from 'react';
import {Text, Pressable, SafeAreaView} from 'react-native';
import Button from '../../styles/buttons';
import styles from './LoginScreen.styles';

function LoginScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        style={Button.normal}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text style={Button.text}>Login</Text>
      </Pressable>
    </SafeAreaView>
  );
}

export default LoginScreen;
