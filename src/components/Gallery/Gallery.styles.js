import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  flex1: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 15,
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  sortContainer: {
    flexDirection: 'row',
    marginHorizontal: 25,
    marginVertical: 10,
    width: 150,
    justifyContent: 'space-between',
  },
  sortText: {
    fontSize: 16,
  },
  activeSort: {
    color: 'blue',
  },
  filterContainer: {
    flexDirection: 'row',
    marginHorizontal: 25,
    marginVertical: 10,
    width: 200,
    justifyContent: 'space-between',
  },
});
