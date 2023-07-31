import { useSelector } from 'react-redux';
import { isLogin } from 'redux/auth/auth-selector';

const UseAuth = () => {
  return useSelector(isLogin);
};

export default UseAuth;
