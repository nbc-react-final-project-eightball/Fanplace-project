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
  const logout = async () => {
    try {
      await signOut(auth);
      dispatch(logOut());

      navigate('/');
      alert('로그아웃 되었습니다.');
      console.log('user logged out');
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return { logout };
};
