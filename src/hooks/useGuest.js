import {useSelector} from 'react-redux';

const useGuest = () => {
  const current_user = useSelector(data => data.user);

  return current_user.id === 'guest';
};

export default useGuest;
