import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6d6875',
    marginBottom: 50,
  },
  imageContainer: {
    position: 'absolute',
    bottom: -50,
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: '#ced4da',
    borderColor: 'white',
    borderWidth: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  content: {
    flex: 2,
    alignItems: 'center',
    padding: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: '500',
    color: '#343a40',
  },
  email: {
    color: '#adb5bd',
  },
  description: {
    marginVertical: 35,
    color: '#343a40',
  },
  imageLink: {
    width: 90,
    height: 90,
  },
});
