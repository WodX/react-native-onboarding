import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import GalleryItem from './GalleryItem';
import styles from './Gallery.styles';
import {FilterView, NoImage, SortView} from '../';
import {
  handleSort,
  getUniqueLabels,
  filterByLabel,
  getUniqueLocations,
  filterByLocation,
  getUniqueMonths,
  filterByMonth,
  getUniqueYears,
  filterByYear,
  getUniqueDays,
  filterByDay,
  getUniqueHours,
  filterByHour,
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
  const [year, setYear] = useState();
  const [month, setMonth] = useState();
  const [day, setDay] = useState();
  const [hour, setHour] = useState();

  if (data.length <= 0) {
    return <NoImage />;
  }

  const labels = getUniqueLabels(data);
  const locations = getUniqueLocations(data);
  const years = getUniqueYears(data);
  const months = getUniqueMonths(data);
  const days = getUniqueDays(data);
  const hours = getUniqueHours(data);

  const filteredLabels = filterByLabel(data, label);
  const filteredLocation = filterByLocation(filteredLabels, location);
  const filteredYears = filterByYear(filteredLocation, year);
  const filteredMonth = filterByMonth(filteredYears, month);
  const filteredDay = filterByDay(filteredMonth, day);
  const filteredHour = filterByHour(filteredDay, hour);

  const order_data = sort
    ? filteredHour.sort(handleSort(sortBy, sortOrder))
    : filteredHour;

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
    Year: {
      data: years,
      onValueChange: itemValue => setYear(itemValue),
      selectedValue: year,
    },
    Month: {
      data: months,
      onValueChange: itemValue => setMonth(itemValue),
      selectedValue: month,
    },
    Day: {
      data: days,
      onValueChange: itemValue => setDay(itemValue),
      selectedValue: day,
    },
    Hour: {
      data: hours,
      onValueChange: itemValue => setHour(itemValue),
      selectedValue: hour,
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
