import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';
import { useContext } from 'react';
import { AuthContext } from 'contexts/AuthContext';

export const useLogout = () => {
  const { dispatch } = useContext(AuthContext);

  const logout = async () => {
    try {
      await signOut(auth);
      dispatch({ type: 'LOGOUT' });
      alert('로그아웃 되었습니다.');
      console.log('user logged out');
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return { logout };
};
