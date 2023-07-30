import { useSelector } from 'react-redux';
import { isLogin } from 'redux/auth/auth-selector';

const UseAuth = () => {
  const isAuth = useSelector(isLogin);
  return isAuth;
};

export default UseAuth;
