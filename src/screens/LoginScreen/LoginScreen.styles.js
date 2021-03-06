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
  imageContainer: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 50,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  errorMessage: {
    color: '#f08080',
  },
  link: {color: '#277da1'},
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
});
