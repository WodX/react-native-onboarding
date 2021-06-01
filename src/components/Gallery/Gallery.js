import React, {useState} from 'react';
import {View, ScrollView, Text} from 'react-native';
import GalleryItem from './GalleryItem';
import styles from './Gallery.styles';
import {FilterView, NoImage, SortView} from '../';
import {handleSort} from '../../helpers/sort';
import {useSelector} from 'react-redux';

const SORT_OPTIONS = {
  created_at: 'Date',
};

function Gallery({data, onPressItem, sort = true, filter = true}) {
  const [sortOrder, setSortOrder] = useState(true);
  const [sortBy, setSortBy] = useState('created_at');
  const [isVisible, setIsVisible] = useState(false);
  const [label, setLabel] = useState();
  const [location, setLocation] = useState();

  const getUnique = array => {
    return array.filter((elem, index) => {
      if (elem !== '') {
        return array.indexOf(elem) === index;
      }
    });
  };

  const all_labels = data.map(image => {
    return image.labels.map(label_data => label_data);
  });

  const labels = getUnique(all_labels.join().split(','));

  const filterByLabels = data.filter(arr => {
    let ok = !label ? true : false;
    arr.labels.forEach(element => {
      if (element === label) {
        ok = true;
      }
    });
    if (ok) {
      return arr;
    }
  });

  const locations = getUnique(data.map(image => image.location.status));

  const filterByLocation = filterByLabels.filter(loc => {
    if (location) {
      return loc.location.status === location;
    }
    return loc;
  });

  const filterOptions = {
    Labels: {
      data: labels,
      onValueChange: itemValue => setLabel(itemValue),
      selectedValue: label,
    },
    Location: {
      data: locations,
      onValueChange: itemValue => setLocation(itemValue),
      selectedValue: location,
    },
  };

  const order_data = sort
    ? filterByLocation.sort(handleSort(sortBy, sortOrder))
    : filterByLocation;

  if (data.length <= 0) {
    return <NoImage />;
  }

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
      {filter && (
        <FilterView
          visible={isVisible}
          onPress={() => setIsVisible(!isVisible)}
          options={filterOptions}
        />
      )}
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
    </View>
  );
}

export default Gallery;
