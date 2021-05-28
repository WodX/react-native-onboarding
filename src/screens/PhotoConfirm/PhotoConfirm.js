import React, {useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Button,
  Switch,
  Pressable,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addImage} from '../../store/slices/imageSlice';
import styles from './PhotoConfirm.styles';
import Geolocation from '@react-native-community/geolocation';
import {Picker} from '@react-native-picker/picker';
import ButtonStyle from '../../styles/buttons';

function PhotoScreen({navigation, route: {params: image}}) {
  const dispatch = useDispatch();
  const user_id = useSelector(data => data.user.id);
  const [album, setAlbum] = useState('');
  const [description, setDescription] = useState('');
  const [labels, setLabels] = useState([]);
  const [location, setLocation] = useState({status: '', info: {}});
  const [isPrivate, setIsPrivate] = useState(false);
  const descriptionInput = useRef(null);

  const handleLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        fetch(
          `https://geocode.xyz/${position.coords.latitude},${position.coords.longitude}?geoit=json`,
        ).then(response => {
          response.json().then(location_data =>
            setLocation({
              status: `${location_data.city}, ${location_data.country}`,
              info: location_data,
            }),
          );
        });
      },
      err => {
        console.log(err);
      },
      {enableHighAccuracy: true},
    );
  };

  const handleLabels = text => {
    const string = text.replace(' ', '');
    setLabels(string.split(','));
  };

  const handleCancel = () => {
    navigation.goBack();
    navigation.navigate('Gallery');
  };

  const handleUpload = () => {
    dispatch(
      addImage({
        ...image,
        location,
        labels,
        isPrivate,
        description,
        album,
        user_id,
      }),
    );
    navigation.goBack();
    navigation.navigate('Gallery');
  };

  useEffect(() => {
    Geolocation.requestAuthorization();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.descriptionContainer}>
        <View style={styles.imageContainer}>
          <Image source={{uri: image.uri}} style={styles.image} />
        </View>
        <TextInput
          ref={descriptionInput}
          placeholder="Description..."
          placeholderTextColor="#101010"
          multiline
          style={styles.descriptionInput}
          onChangeText={setDescription}
        />
      </View>
      <TouchableWithoutFeedback onPress={() => descriptionInput.current.blur()}>
        <View style={styles.content}>
          <View style={styles.location}>
            {!location.status ? (
              <Button title="Add Current Location" onPress={handleLocation} />
            ) : (
              <>
                <Text style={styles.text}>Location: </Text>
                <Text>{location.status}</Text>
              </>
            )}
          </View>
          <View style={styles.labels}>
            <Text style={styles.text}>Labels:</Text>
            <TextInput
              placeholder="ex: sun, greatday, party..."
              placeholderTextColor="#fff"
              returnKeyType="done"
              style={styles.labelsInput}
              onChangeText={handleLabels}
            />
          </View>
          <View style={styles.album}>
            <Text style={styles.text}>Album:</Text>
            <Picker
              style={styles.picker}
              itemStyle={styles.pickerItem}
              selectedValue={album}
              onValueChange={(itemValue, itemIndex) => setAlbum(itemValue)}>
              <Picker.Item label="No albums" value="" color="#333" />
            </Picker>
          </View>
          <View style={styles.album}>
            <Text style={styles.text}>Private:</Text>
            <Switch
              trackColor={{true: '#277da1'}}
              onValueChange={() => setIsPrivate(!isPrivate)}
              value={isPrivate}
            />
          </View>
          <Pressable style={ButtonStyle.normal} onPress={handleUpload}>
            <Text style={ButtonStyle.text}>Upload Photo</Text>
          </Pressable>
          <Pressable style={ButtonStyle.close} onPress={handleCancel}>
            <Text style={ButtonStyle.text}>Cancel</Text>
          </Pressable>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

export default PhotoScreen;
