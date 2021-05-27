import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import styles from './ProfilePhoto.styles';

function ProfilePhoto({onPress, image, style}) {
  return (
    <View style={[styles.imageContainer, style && style]}>
      <TouchableOpacity onPress={onPress} style={styles.imageLink}>
        <Image
          source={image ? {uri: image} : require('../../assets/user.png')}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
}

export default ProfilePhoto;
