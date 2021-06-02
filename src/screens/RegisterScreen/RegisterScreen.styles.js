import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    justifyContent: 'center',
  },
  input: {
    padding: 10,
    backgroundColor: '#ced4da',
    borderRadius: 10,
    width: 300,
    marginVertical: 10,
  },
  error: {
    borderWidth: 2,
    borderColor: '#f08080',
  },
  errorMessage: {
    color: '#f08080',
  },
  image: {
    alignSelf: 'center',
    margin: 20,
  },
  link: {color: '#277da1'},
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
});
