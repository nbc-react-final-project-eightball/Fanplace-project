import { auth } from 'firebase/config';
import { User, updatePassword } from 'firebase/auth';

interface PasswordUpdateHook {
  passwordUpdate: (user: any, newPassword: string) => Promise<void>;
}

export const usePasswordUpdate = (): PasswordUpdateHook => {
  const passwordUpdate = async (user: any, newPassword: string) => {
    updatePassword(user, newPassword)
      .then(() => {
        // Update successful.
        console.log('비밀번호 업데이트에 성공했습니다');
      })
      .catch((error: string) => {
        // An error ocurred
        console.log('비밀번호 업데이트에 실패했습니다');
      });
  };

  return { passwordUpdate };
};
