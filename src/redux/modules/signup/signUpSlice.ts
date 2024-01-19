import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserInfo } from 'firebase/auth';

interface SignUpState {
  isLogged: boolean;
  address: string;
  isAddressSuccess: boolean;
  userInfo: UserInfo | null;
}

interface setUserInfo {
  userInfo: UserInfo | null;
}

interface setAddress {
  address: string;
  isAddressSuccess: boolean;
}

interface LogInState {
  userInfo: UserInfo;
}

const initialState: SignUpState = {
  isLogged: false,
  address: '',
  isAddressSuccess: false,
  userInfo: null,
};

export const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<setUserInfo>) => {
      console.log('action.payload.userInfo', action.payload.userInfo);
      state.userInfo = action.payload.userInfo;
    },
    setAddress: (state, action: PayloadAction<setAddress>) => {
      state.address = action.payload.address;
      state.isAddressSuccess = true;
    },
    logIn: (state, action: PayloadAction<LogInState>) => {
      console.log('회원가입/로그인', action.payload);
      state.userInfo = action.payload.userInfo;
      state.isLogged = true;
    },
    logOut: (state) => {
      state.isLogged = false;
      state.address = '';
      state.isAddressSuccess = false;
      state.userInfo = null;
    },
  },
});

export const { setUserInfo, setAddress, logIn, logOut } = signUpSlice.actions;

export default signUpSlice.reducer;
