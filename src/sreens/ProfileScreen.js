import * as React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {updateUser} from '../app/userSlice';

function ProfileScreen({navigation}) {
  return (
    <SafeAreaView>
      <Text>ProfileScreen</Text>
    </SafeAreaView>
  );
}

export default ProfileScreen;
