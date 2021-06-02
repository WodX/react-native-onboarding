import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import GalleryItem from './GalleryItem';
import styles from './Gallery.styles';
import {FilterView, NoImage, SortView} from '../';
import {
  handleSort,
  getUniqueLabels,
  filterByLabels,
  getUniqueLocations,
  filterByLocation,
} from '../../helpers/helper';

const SORT_OPTIONS = {
  created_at: 'Date',
};

function Gallery({data, onPressItem, sort = true, filter = true}) {
  const [sortOrder, setSortOrder] = useState(true);
  const [sortBy, setSortBy] = useState('created_at');
  const [isVisible, setIsVisible] = useState(false);
  const [label, setLabel] = useState();
  const [location, setLocation] = useState();

  if (data.length <= 0) {
    return <NoImage />;
  }

  const labels = getUniqueLabels(data);
  const locations = getUniqueLocations(data);

  const filteredLabels = filterByLabels(data, label);
  const filteredLocation = filterByLocation(filteredLabels, location);

  const order_data = sort
    ? filteredLocation.sort(handleSort(sortBy, sortOrder))
    : filteredLocation;

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
