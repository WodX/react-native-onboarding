import * as React from 'react';
import {Text, Pressable, SafeAreaView, StyleSheet} from 'react-native';
import Button from '../styles/buttons';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
