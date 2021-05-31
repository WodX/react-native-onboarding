import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  safeView: {
    flex: 1,
  },
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
  options: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  button: {
    flex: 1,
    height: 50,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  text: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
