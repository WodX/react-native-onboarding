import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {flex: 1},
  descriptionContainer: {
    flexDirection: 'row',
    height: 100,
  },
  descriptionInput: {
    flex: 1,
    padding: 5,
    marginVertical: 10,
  },
  imageContainer: {
    width: 100,
    height: 100,
    padding: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  content: {flex: 1, padding: 15},
  location: {marginVertical: 15, flexDirection: 'row'},
  labels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  labelsInput: {
    padding: 10,
    backgroundColor: '#ced4da',
    borderRadius: 10,
    width: '80%',
    marginVertical: 10,
  },
  album: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  picker: {padding: 15, width: '90%'},
  pickerItem: {height: 50, padding: 15},
  text: {
    fontWeight: 'bold',
  },
});
