import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import GalleryItem from './GalleryItem';
import styles from './Gallery.styles';
import {NoImage, SortView} from '../';
import {handleSort} from '../../helpers/sort';

const SORT_OPTIONS = {
  created_at: 'Date',
};

function Gallery({data, onPressItem, sort = true}) {
  const [sortOrder, setSortOrder] = useState(true);
  const [sortBy, setSortBy] = useState('created_at');

  const order_data = sort ? data.sort(handleSort(sortBy, sortOrder)) : data;

  return (
    <View style={styles.flex1}>
      {sort && (
        <SortView
          sortOptions={SORT_OPTIONS}
          sortOrder={sortOrder}
          sortBy={sortBy}
          onPressOptions={option => setSortBy(option)}
          onPressOrder={() => setSortOrder(!sortOrder)}
        />
      )}
      {order_data.length > 0 ? (
        <ScrollView>
          <View style={[styles.container]}>
            {order_data.map(image => {
              return (
                <GalleryItem
                  key={image.uri || image.id}
                  image={image}
                  onPress={() => {
                    onPressItem(image);
                  }}
                />
              );
            })}
          </View>
        </ScrollView>
      ) : (
        <NoImage />
      )}
    </View>
  );
}

export default Gallery;
