import { useState } from 'react';
import * as S from '../../styledComponent/styledAuth/StAuthForm';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db } from '../../firebase/config';
import { doc, setDoc } from 'firebase/firestore';
import { useSocialLogin } from '../../hooks/useSocialLogin';
import { useNavigate } from 'react-router-dom';
import { useLogin } from 'hooks/useLogin';
import { Controller, useForm } from 'react-hook-form';

const AuthForm = () => {
  const navigate = useNavigate();

  const [isLoginForm, setIsLoginForm] = useState<boolean>(true);

  // react-hook-form
  const {
    handleSubmit,
    control,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    // 실시간 유효성 검사
    mode: isLoginForm ? 'onSubmit' : 'onChange',
  });

  // 로그인 훅
  // 깃허브로 로그인
  const {
    socialLogin: githubLogin,
    isPending: githubIsPending,
    error: githubError,
  } = useSocialLogin('github');

  // 구글로 로그인
  const {
    socialLogin: googleLogin,
    isPending: googleIsPending,
    error: googleError,
  } = useSocialLogin('google');

  // 이메일로 로그인
  const { login, isPending, error } = useLogin();

  // if (isLoading) {
  //   return <div>로딩 중..</div>;
  // }

  const submitHandler = async (data: Record<string, any>) => {
    const {
      loginEmail,
      signUpEmail,
      userName,
      phoneNumber,
      address,
      loginPassword,
      signUpPassword,
      passwordConfirmation,
    } = data;

    const authInputData = {
      loginEmail: data.get('loginEmail'),
      signUpEmail: data.get('signUpEmail'),
      userName: data.get('userName'),
      phoneNumber: data.get('phoneNumber'),
      address: data.get('address'),
      loginPassword: data.get('loginPassword'),
      signUpPassword: data.get('signUpPassword'),
      passwordConfirmation: data.get('passwordConfirmation'),
    };

    try {
      if (isLoginForm) {
        // 로그인
        await login(data.email, loginPassword);
        alert('로그인 되었습니다.');
        navigate('/');
      } else {
        //회원가입;
        const response = await createUserWithEmailAndPassword(
          auth,
          signUpEmail,
          signUpPassword,
        );

        await updateProfile(response.user, { displayName: userName });

        console.log('response', response);
        await setDoc(doc(db, 'user', response.user.uid), {
          name: userName,
          phoneNumber,
          email: signUpEmail,
        });
        alert('회원가입이 완료되었습니다.');
        reset();
        setIsLoginForm(true);
      }
    } catch (error) {
      console.log('알 수 없는 오류가 발생하였습니다.', error);
    }
  };
  return (
    <>
      <S.AuthForm onSubmit={handleSubmit(submitHandler)}>
        <h2>{isLoginForm ? '로그인' : '회원가입'}</h2>
        {isLoginForm ? (
          <>
            <Controller
              name="loginEmail"
              control={control}
              defaultValue={''}
              rules={{
                required: '이메일을 입력하세요.',
              }}
              render={({ field, fieldState }) => (
                <S.TextInputField
                  value={field.value}
                  onChange={field.onChange}
                  error={fieldState.error !== undefined && fieldState.isDirty}
                  helperText={fieldState.error && fieldState.error.message}
                  InputLabelProps={{ shrink: false }}
                  InputProps={{
                    placeholder: '이메일',
                  }}
                />
              )}
            />
            <Controller
              name="loginPassword"
              control={control}
              defaultValue={''}
              rules={{
                required: '비밀번호를 입력해주세요!',
                minLength: { value: 8, message: '최소 8자 입력해주세요.' },
              }}
              render={({ field, fieldState }) => (
                <S.TextInputField
                  value={field.value}
                  onChange={field.onChange}
                  error={fieldState.error !== undefined && fieldState.isDirty}
                  helperText={fieldState.error && fieldState.error.message}
                  InputLabelProps={{ shrink: false }}
                  InputProps={{
                    placeholder: '비밀번호',
                  }}
                />
              )}
            />
          </>
        ) : (
          <>
            <Controller
              name="userName"
              control={control}
              defaultValue={''}
              rules={{
                required: '이름을 입력해주세요',
                pattern: {
                  value: /^[가-힣a-zA-Z0-9]+$/u,
                  message: '올바른 이름을 입력해주세요',
                },
              }}
              render={({ field, fieldState }) => (
                <S.TextInputField
                  value={field.value}
                  onChange={field.onChange}
                  error={fieldState.error !== undefined && fieldState.isDirty}
                  helperText={fieldState.error && fieldState.error.message}
                  InputLabelProps={{ shrink: false }}
                  InputProps={{
                    // maxLength: 8,
                    placeholder: '이름을 입력해주세요(최대 8자)',
                  }}
                />
              )}
            />
            <Controller
              name="phoneNumber"
              control={control}
              defaultValue={''}
              rules={{
                required: '전화번호를 입력해주세요!(숫자만)',
                pattern: {
                  value: /^010[0-9]{8}$/,
                  message: '올바른 전화번호를 입력해주세요',
                },
              }}
              render={({ field, fieldState }) => (
                <S.TextInputField
                  value={field.value}
                  onChange={field.onChange}
                  error={fieldState.error !== undefined && fieldState.isDirty}
                  helperText={fieldState.error && fieldState.error.message}
                  InputLabelProps={{ shrink: false }}
                  InputProps={{
                    // maxLength: 11,
                    placeholder: '01012345678',
                  }}
                />
              )}
            />
            <Controller
              name="address"
              control={control}
              defaultValue={''}
              rules={{
                required: '기본 배송지를 입력해주세요',
              }}
              render={({ field, fieldState }) => (
                <S.TextInputField
                  value={field.value}
                  onChange={field.onChange}
                  error={fieldState.error !== undefined && fieldState.isDirty}
                  helperText={fieldState.error && fieldState.error.message}
                  InputLabelProps={{ shrink: false }}
                  InputProps={{
                    // maxLength: 11,
                    placeholder: '기본 배송지를 입력해주세요',
                  }}
                />
              )}
            />
            <Controller
              name="signUpEmail"
              control={control}
              defaultValue={''}
              rules={{
                required: '이메일을 입력하세요.',
                pattern: {
                  value:
                    /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)/,
                  message: '올바른 이메일 형식을 입력해주세요',
                },
              }}
              render={({ field, fieldState }) => (
                <S.TextInputField
                  value={field.value}
                  onChange={field.onChange}
                  error={fieldState.error !== undefined && fieldState.isDirty}
                  helperText={fieldState.error && fieldState.error.message}
                  InputLabelProps={{ shrink: false }}
                  InputProps={{
                    placeholder: '이메일을 입력해주세요',
                  }}
                />
              )}
            />
            <Controller
              name="signUpPassword"
              control={control}
              defaultValue={''}
              rules={{
                required:
                  '숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!',
                minLength: { value: 8, message: '최소 8자 입력해주세요.' },
                pattern: {
                  value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/,
                  message:
                    '숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!',
                },
              }}
              render={({ field, fieldState }) => (
                <S.TextInputField
                  value={field.value}
                  onChange={field.onChange}
                  error={fieldState.error !== undefined && fieldState.isDirty}
                  helperText={fieldState.error && fieldState.error.message}
                  InputLabelProps={{ shrink: false }}
                  InputProps={{
                    placeholder: '비밀번호를 입력해주세요!',
                  }}
                />
              )}
            />
            <Controller
              name="passwordConfirmation"
              control={control}
              defaultValue={''}
              rules={{
                required: '비밀번호 확인이 일치하지 않습니다!',
                minLength: { value: 6, message: '최소 6자 입력해주세요.' },
                validate: (value) =>
                  value === getValues('signUpPassword') ||
                  '비밀번호 확인이 일치하지 않습니다!',
              }}
              render={({ field, fieldState }) => (
                <S.TextInputField
                  value={field.value}
                  onChange={field.onChange}
                  error={!!fieldState.error}
                  helperText={fieldState.error && fieldState.error.message}
                  InputLabelProps={{ shrink: false }}
                  InputProps={{
                    // maxLength: 12,
                    ...(fieldState.error !== undefined
                      ? { maxLength: 12 }
                      : {}),
                    placeholder: '비밀번호 확인을 입력해주세요',
                  }}
                />
              )}
            />
          </>
        )}
        <S.LoginButton type="submit">
          {isLoginForm ? '이메일로 로그인' : '이메일로 회원가입'}
        </S.LoginButton>
        {isLoginForm ? (
          <S.SignUpButton
            onClick={() => {
              setIsLoginForm(false);
              reset();
            }}
          >
            이메일로 회원가입하기
          </S.SignUpButton>
        ) : (
          <S.SignUpButton
            onClick={() => {
              setIsLoginForm(true);
              reset();
            }}
          >
            이메일로 로그인하기
          </S.SignUpButton>
        )}
        <S.LoginButton onClick={googleLogin}>
          {googleIsPending ? 'Loading...' : '구글 로그인'}
        </S.LoginButton>
        <S.LoginButton onClick={githubLogin}>
          {githubIsPending ? 'Loading...' : '깃허브 로그인'}
        </S.LoginButton>
      </S.AuthForm>
    </>
  );
};

export default AuthForm;
