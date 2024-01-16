import { useState } from 'react';
import * as S from '../../styledComponent/styledAuth/StAuthForm';
import { useSocialLogin } from '../../hooks/useSocialLogin';
import { useNavigate } from 'react-router-dom';
import { useLogin } from 'hooks/useLogin';
import { Controller, useForm } from 'react-hook-form';
import { InputLabel } from '@mui/material';
import DeliveryAddress from './DeliveryAddress';
import { useSignUp } from 'hooks/useSignUp';
import { useSelector } from 'react-redux';

const AuthForm = () => {
  const navigate = useNavigate();

  const [isLoginForm, setIsLoginForm] = useState<boolean>(true);

  // react-hook-form
  const {
    handleSubmit,
    control,
    reset,
    getValues,
    formState: { errors, isValid },
  } = useForm({
    // 실시간 유효성 검사
    mode: isLoginForm ? 'onSubmit' : 'onChange',
  });
  console.log('isLoginForm', isLoginForm);

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

  // 이메일로 회원가입
  const { signUp } = useSignUp();

  // if (isLoading) {
  //   return <div>로딩 중..</div>;
  // }

  interface SignUpState {
    address: string;
  }

  const { address } = useSelector(
    (state: { signUpSlice: SignUpState }) => state.signUpSlice,
  );

  const submitHandler = async (data: Record<string, any>) => {
    try {
      if (isLoginForm) {
        // 로그인
        const [email, password] = getValues(['email', 'password']);

        await login(email, password);
      } else {
        // 회원가입
        const [email, displayName, phoneNumber, password] = getValues([
          'email',
          'displayName',
          'phoneNumber',
          'password',
        ]);

        console.log('address______________', address);
        await signUp(email, displayName, phoneNumber, address, password);

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
        <S.AuthFormTitle>{isLoginForm ? '로그인' : '회원가입'}</S.AuthFormTitle>
        {isLoginForm ? (
          <>
            <Controller
              name="email"
              control={control}
              defaultValue={''}
              render={({ field, fieldState }) => (
                <div>
                  <InputLabel>이메일</InputLabel>
                  <S.TextInputField
                    value={field.value}
                    onChange={field.onChange}
                    error={fieldState.error !== undefined && fieldState.isDirty}
                    helperText={
                      fieldState.isDirty
                        ? fieldState.error && fieldState.error.message
                        : ''
                    }
                    InputLabelProps={{ shrink: false }}
                    InputProps={{
                      placeholder: 'fancyplace@gmail.com',
                    }}
                  />
                </div>
              )}
            />
            <Controller
              name="password"
              control={control}
              defaultValue={''}
              render={({ field, fieldState }) => (
                <div>
                  <InputLabel>비밀번호</InputLabel>
                  <S.TextInputField
                    type="password"
                    value={field.value}
                    onChange={field.onChange}
                    error={fieldState.error !== undefined && fieldState.isDirty}
                    helperText={
                      fieldState.isDirty
                        ? fieldState.error && fieldState.error.message
                        : ''
                    }
                    InputLabelProps={{ shrink: false }}
                    InputProps={{
                      placeholder: '비밀번호',
                    }}
                  />
                </div>
              )}
            />
          </>
        ) : (
          <>
            <Controller
              name="displayName"
              control={control}
              defaultValue={''}
              rules={{
                required: '이름을 입력해주세요',
                pattern: {
                  value: /^[가-힣]+$/u,
                  message: '올바른 이름을 입력해주세요',
                },
              }}
              render={({ field, fieldState }) => (
                <div>
                  <InputLabel>이름</InputLabel>
                  <S.TextInputField
                    value={field.value}
                    onChange={field.onChange}
                    error={fieldState.error !== undefined && fieldState.isDirty}
                    helperText={
                      fieldState.isDirty
                        ? fieldState.error && fieldState.error.message
                        : ''
                    }
                    InputLabelProps={{ shrink: false }}
                    InputProps={{
                      // maxLength: 8,
                      placeholder: '이름을 입력해주세요',
                    }}
                  />
                </div>
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
                <div>
                  <InputLabel>전화번호</InputLabel>
                  <S.TextInputField
                    value={field.value}
                    onChange={field.onChange}
                    error={fieldState.error !== undefined && fieldState.isDirty}
                    helperText={
                      fieldState.isDirty
                        ? fieldState.error && fieldState.error.message
                        : ''
                    }
                    InputLabelProps={{ shrink: false }}
                    InputProps={{
                      // maxLength: 11,
                      placeholder: '01012345678',
                    }}
                  />
                </div>
              )}
            />
            <DeliveryAddress />
            <Controller
              name="email"
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
                <div>
                  <InputLabel>이메일</InputLabel>
                  <S.TextInputField
                    value={field.value}
                    onChange={field.onChange}
                    error={fieldState.error !== undefined && fieldState.isDirty}
                    helperText={
                      fieldState.isDirty
                        ? fieldState.error && fieldState.error.message
                        : ''
                    }
                    InputLabelProps={{ shrink: false }}
                    InputProps={{
                      placeholder: 'fancyplace@gmail.com',
                    }}
                  />
                </div>
              )}
            />
            <Controller
              name="password"
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
                <div>
                  <InputLabel>비밀번호</InputLabel>
                  <S.TextInputField
                    type="password"
                    value={field.value}
                    onChange={field.onChange}
                    error={fieldState.error !== undefined && fieldState.isDirty}
                    helperText={
                      fieldState.isDirty
                        ? fieldState.error && fieldState.error.message
                        : ''
                    }
                    InputLabelProps={{ shrink: false }}
                    InputProps={{
                      placeholder: '비밀번호를 입력해주세요!',
                    }}
                  />
                </div>
              )}
            />
            <Controller
              name="passwordConfirmation"
              control={control}
              defaultValue={''}
              rules={{
                required: '비밀번호 확인이 일치하지 않습니다!',
                validate: (value) =>
                  value === getValues('password') ||
                  '비밀번호 확인이 일치하지 않습니다!',
              }}
              render={({ field, fieldState }) => (
                <div>
                  <InputLabel>비밀번호 확인</InputLabel>
                  <S.TextInputField
                    type="password"
                    value={field.value}
                    onChange={field.onChange}
                    error={!!(fieldState.isDirty && fieldState.error)}
                    helperText={
                      fieldState.isDirty
                        ? fieldState.error && fieldState.error.message
                        : ''
                    }
                    InputLabelProps={{ shrink: false }}
                    InputProps={{
                      // maxLength: 12,
                      placeholder: '비밀번호 확인을 입력해주세요',
                    }}
                  />
                </div>
              )}
            />
          </>
        )}
        {isLoginForm ? (
          <S.LoginButton type="submit" disabled={!isValid}>
            로그인{' '}
          </S.LoginButton>
        ) : (
          <S.SignUpButton type="submit" disabled={!isValid}>
            회원가입 완료
          </S.SignUpButton>
        )}
        {isLoginForm ? (
          <>
            <p>아직 회원이 아니신가요?</p>
            <S.GuideButton
              type="button"
              onClick={() => {
                setIsLoginForm(false);
                reset();
              }}
            >
              회원가입하기
            </S.GuideButton>
          </>
        ) : (
          <>
            <p>이미 회원이신가요?</p>
            <S.GuideButton
              type="button"
              onClick={() => {
                setIsLoginForm(true);
                reset();
              }}
            >
              로그인하기
            </S.GuideButton>
          </>
        )}
        {isLoginForm ? (
          <>
            <S.LoginButton width={'24px'} onClick={googleLogin}>
              {googleIsPending ? (
                'Loading...'
              ) : (
                <>
                  <img
                    src={`${process.env.PUBLIC_URL}/img/logo/google.png`}
                    alt="Google Logo"
                  />
                  구글 로그인
                </>
              )}
            </S.LoginButton>
            <S.LoginButton
              color={'#333333'}
              width={'18px'}
              onClick={githubLogin}
            >
              {githubIsPending ? (
                'Loading...'
              ) : (
                <>
                  <img
                    src={`${process.env.PUBLIC_URL}/img/logo/github.png`}
                    alt="github Logo"
                  />
                  깃허브 로그인
                </>
              )}
            </S.LoginButton>
          </>
        ) : (
          <></>
        )}
      </S.AuthForm>
    </>
  );
};

export default AuthForm;
