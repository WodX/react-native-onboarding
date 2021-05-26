import * as React from 'react';
import {Text, Pressable, SafeAreaView, StyleSheet} from 'react-native';

function LoginScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text style={styles.textStyle}>Login</Text>
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
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    minWidth: 100,
    marginVertical: 5,
    backgroundColor: '#277da1',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default LoginScreen;
