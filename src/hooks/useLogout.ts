import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../redux/modules/signup/signUpSlice';
import { useNavigate } from 'react-router-dom';

interface LogOutState {
  visible: boolean;
}
export const useLogout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(
    (state: { signUpSlice: LogOutState }) => state.signUpSlice,
  );
  const userProfile = !!user;
  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(logOut());

      navigate('/');
      console.log('user logged out');
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const logout = () => {
    const confirmLogout = window.confirm('로그아웃 하시겠습니까?');
    if (confirmLogout) {
      handleLogout();
      alert('로그아웃 되었습니다.');
    }
  };
  return { logout };
};
