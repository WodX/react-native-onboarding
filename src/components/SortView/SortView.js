import React from 'react';
import {Pressable, Text, View} from 'react-native';
import styles from './SortView.styles';

const SortView = ({
  sortOptions,
  sortOrder,
  sortBy,
  onPressOptions,
  onPressOrder,
}) => {
  return (
    <View style={styles.sortContainer}>
      <Text style={[styles.sortText, styles.bold]}>Sort by:</Text>
      {Object.entries(sortOptions).map(option => (
        <Pressable onPress={() => onPressOptions(option[0])} key={option[0]}>
          <Text
            style={[
              styles.sortText,
              sortBy === option[0] && styles.activeSort,
            ]}>
            {option[1]}
          </Text>
        </Pressable>
      ))}
      <Pressable onPress={onPressOrder}>
        <Text style={[styles.sortText]}>{sortOrder ? '⬆' : '⬇'}</Text>
      </Pressable>
    </View>
  );
};

export default SortView;
