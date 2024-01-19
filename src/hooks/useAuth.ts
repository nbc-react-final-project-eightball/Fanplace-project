import { auth } from '../firebase/config';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserInfo } from '../redux/modules/signup/signUpSlice';

interface SignUpState {
  userInfo: any | null;
}

const useAuth = () => {
  const dispatch = useDispatch();
  const user = useSelector(
    (state: { signUpSlice: SignUpState }) => state.signUpSlice.userInfo,
  );

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log('로그인한 유저는?', authUser);
        dispatch(setUserInfo({ userInfo: authUser }));
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return user;
};

export default useAuth;
