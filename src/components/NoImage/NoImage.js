import * as React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './NoImage.styles';

const NoImage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/no-photo.png')}
      />
      <Text style={styles.text}>No Photos</Text>
    </View>
  );
};

export default NoImage;
