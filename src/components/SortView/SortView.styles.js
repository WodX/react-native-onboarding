import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  sortContainer: {
    flexDirection: 'row',
    marginHorizontal: 25,
    marginVertical: 10,
    width: 200,
    justifyContent: 'space-between',
  },
  sortText: {
    fontSize: 16,
  },
  activeSort: {
    color: 'blue',
  },
  bold: {
    fontWeight: 'bold',
  },
});
