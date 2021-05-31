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
import {ModalAlbum} from '../';
import {addAlbum} from '../../store/slices/albumSlice';
import Button from '../../styles/buttons';
import styles from './Album.styles';

function Album({userId, navigation}) {
  const dispatch = useDispatch();
  const albums_data = useSelector(data =>
    data.album.items.filter(album => album.user_id === userId),
  );
  const [albums, setAlbums] = useState(albums_data);
  const [modalVisible, setModalVisible] = useState(false);
  const [dataSort, setDataSort] = useState(true);
  const [arrow, setArrow] = useState(true);

  const handleCreate = ({name}) => {
    setModalVisible(!modalVisible);
    dispatch(addAlbum({name: name, user_id: userId}));
  };

  const handleClose = () => {
    setModalVisible(!modalVisible);
  };

  const handleSort = type => {
    return (a, b) => (a[type] > b[type] ? 1 : b[type] > a[type] ? -1 : 0);
  };

  useState(() => {
    setAlbums(albums_data);
  }, [albums_data]);

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
        <View style={styles.sortContainer}>
          <Text style={[styles.sortText, {fontWeight: 'bold'}]}>Sort by:</Text>
          <Pressable
            onPress={() => {
              setDataSort(true);
              setAlbums(albums.sort(handleSort('id')));
            }}>
            <Text style={[styles.sortText, dataSort && styles.activeSort]}>
              Date
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setDataSort(false);
              setAlbums(albums.sort(handleSort('name')));
            }}>
            <Text style={[styles.sortText, !dataSort && styles.activeSort]}>
              Title
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setAlbums(albums.reverse());
              setArrow(!arrow);
            }}>
            <Text style={[styles.sortText]}>{arrow ? '⬆' : '⬇'}</Text>
          </Pressable>
        </View>
        <ScrollView>
          <View style={[styles.container]}>
            {albums.map(item => {
              return (
                <TouchableOpacity
                  style={styles.itemContainer}
                  key={item.id}
                  onPress={() =>
                    navigation.navigate('ShowAlbum', {id: item.id})
                  }>
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
              );
            })}
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
