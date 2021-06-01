import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 10,
    width: 200,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
  },
  bold: {
    fontWeight: 'bold',
  },
  picker: {padding: 5, width: 250},
  pickerItem: {height: 40, fontSize: 14, color: 'red'},
  row: {
    flexDirection: 'row',
  },
  label: {height: 50, padding: 15, alignSelf: 'center'},
});
