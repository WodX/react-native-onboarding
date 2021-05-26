const normal = {
  borderRadius: 10,
  padding: 10,
  elevation: 2,
  minWidth: 100,
  margin: 10,
  backgroundColor: '#277da1',
};

const close = {
  ...normal,
  backgroundColor: '#f08080',
};

const text = {
  color: 'white',
  fontWeight: 'bold',
  textAlign: 'center',
};

const Button = {normal, close, text};

export default Button;
