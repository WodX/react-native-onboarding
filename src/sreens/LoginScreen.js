import * as React from 'react';
import {Button, SafeAreaView} from 'react-native';

function LoginScreen({navigation}) {
  return (
    <SafeAreaView>
      <Button
        title="LOGIN"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </SafeAreaView>
  );
}

export default LoginScreen;
