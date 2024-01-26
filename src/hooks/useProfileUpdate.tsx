import {
  createUserWithEmailAndPassword,
  updateEmail,
  updateProfile,
  User,
  UserInfo,
} from '@firebase/auth';
import { auth, db } from '../firebase/config';
import { useNavigate } from 'react-router-dom';
import { getFirestore, doc, setDoc } from '@firebase/firestore';
import { useDispatch } from 'react-redux';
import { updateProfileData } from '../redux/modules/signup/signUpSlice';

interface profileUpdateHook {
  profileUpdate: (
    displayName: string,
    phoneNumber: string,
    address: string,
    detailAddress: string,
    email: string,
    password: string,
  ) => Promise<void>;
}

export const useProfileUpdate = (): profileUpdateHook => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  // 프로필 수정
  const profileUpdate = async (
    displayName: string, // 유저 인포만 저장
    phoneNumber: string,
    address: string,
    detailAddress: string,
    email: string, // 유저 인포만 저장
    password: string, // 따로 업데이트
  ): Promise<void> => {
    try {
      const user: any | null = auth.currentUser;
      const userId = user.uid;
      if (user) {
        console.log('현재 사용자 UID:', userId);
      } else {
        console.log('사용자가 로그인되어 있지 않습니다.');
      }

      const existingDisplayName = user.displayName;

      if (displayName !== existingDisplayName) {
        const updatedUserInfo: UserInfo = {
          ...user.providerData[0],
          displayName: displayName,
        };

        await updateProfile(user, updatedUserInfo);

        await user.reload();
      }
      const updatedUser: any = auth.currentUser;

      dispatch(
        updateProfileData({
          address,
          detailAddress,
          phoneNumber,
          userInfo: updatedUser.providerData[0],
        }),
      );
      const db = getFirestore();
      const userDocRef = doc(db, 'user', userId);

      await setDoc(userDocRef, {
        displayName,
        phoneNumber,
        email,
        address,
        detailAddress,
      });
      alert('회원 정보 수정이 완료되었습니다.');
      navigate('/mypage');
    } catch (error: any) {
      console.log(error.message);
      console.log('회원 정보 수정 중 오류가 발생했습니다.', error.message);
      alert('회원 정보 수정 중 오류가 발생했습니다.');
    }
  };

  return { profileUpdate };
};
