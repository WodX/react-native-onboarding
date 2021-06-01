import React from 'react';
import {Text, View} from 'react-native';
import styles from './FilterView.styles';
import {Picker} from '@react-native-picker/picker';

const FilterView = ({options = {}}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.bold]}>Show Filters</Text>
      {Object.entries(options).map(obj => (
        <View style={styles.row} key={obj[0]}>
          <Text style={[styles.text, styles.bold, styles.label]}>
            {obj[0]}:
          </Text>
          <Picker
            style={styles.picker}
            itemStyle={styles.pickerItem}
            selectedValue={obj[1].selectedValue}
            onValueChange={obj[1].onValueChange}>
            <Picker.Item label={'All'} value={null} color="#aaa" />
            {obj[1].data.map((item, index) => (
              <Picker.Item label={item} value={item} color="#333" key={index} />
            ))}
          </Picker>
        </View>
      ))}
    </View>
  );
};

export default FilterView;
