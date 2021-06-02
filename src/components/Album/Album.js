import React, {useState} from 'react';
import {
  View,
  Text,
  Pressable,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ModalAlbum, SortView} from '../';
import {addAlbum} from '../../store/slices/albumSlice';
import Button from '../../styles/buttons';
import styles from './Album.styles';
import {handleSort} from '../../helpers/helper';

const SORT_OPTIONS = {
  id: 'Date',
  name: 'Title',
};

function Album({userId, navigation}) {
  const dispatch = useDispatch();
  const albums_data = useSelector(data =>
    data.album.items.filter(album => album.user_id === userId),
  );
  const [modalVisible, setModalVisible] = useState(false);
  const [sortOrder, setSortOrder] = useState(true);
  const [sortBy, setSortBy] = useState('id');

  const handleCreate = ({name}) => {
    setModalVisible(!modalVisible);
    dispatch(addAlbum({name: name, user_id: userId}));
  };

  const handleClose = () => {
    setModalVisible(!modalVisible);
  };

  const order_albums = albums_data.sort(handleSort(sortBy, sortOrder));

  return (
    <>
      <View>
        <ModalAlbum
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
          handleClose={handleClose}
          handleCreate={handleCreate}
        />
        <SortView
          sortOptions={SORT_OPTIONS}
          sortOrder={sortOrder}
          sortBy={sortBy}
          onPressOptions={option => setSortBy(option)}
          onPressOrder={() => setSortOrder(!sortOrder)}
        />
        <ScrollView style={styles.maxView}>
          <View style={[styles.container]}>
            {order_albums.map(item => (
              <TouchableOpacity
                style={styles.itemContainer}
                key={item.id}
                onPress={() => navigation.navigate('ShowAlbum', {id: item.id})}>
                <View style={styles.albumContainer}>
                  <Image
                    style={styles.image}
                    source={require('../../assets/album.png')}
                  />
                </View>
                <Text numberOfLines={1} style={styles.textName}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={Button.normal}
          onPress={() => setModalVisible(!modalVisible)}>
          <Text style={Button.text}>Create New Album</Text>
        </Pressable>
      </View>
    </>
  );
}

export default Album;
