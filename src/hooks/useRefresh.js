import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {refreshUser} from '../store/slices/userSlice';

const useRefresh = () => {
  const dispatch = useDispatch();
  const current_user = useSelector(data => data.user);
  const [user] = useSelector(data =>
    data.users.users.filter(user_data => user_data.id === current_user.id),
  );

  useEffect(() => {
    dispatch(refreshUser(user));
  }, [user, dispatch]);

  return;
};

export default useRefresh;
