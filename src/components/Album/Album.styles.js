import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  flex1: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    padding: 15,
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  albumContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    backgroundColor: '#ccc',
    borderRadius: 10,
    margin: 10,
  },
  image: {
    width: 50,
    height: 50,
  },
  textName: {
    width: 100,
    textAlign: 'center',
  },
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
});
