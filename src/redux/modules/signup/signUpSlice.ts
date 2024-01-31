import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserInfo } from 'firebase/auth';

interface AuthState {
  isLogged: boolean;
  address: string | null;
  detailAddress: string | null;
  isAddressSuccess: boolean;
  userInfo: UserInfo | null;
  phoneNumber: string | null;
}

interface setUserInfo {
  userInfo: UserInfo | null;
}

interface setAddress {
  address: string;
  detailAddress: string | null;
}
interface setIsAddressSuccess {
  isAddressSuccess: boolean;
}

interface setPhoneNumber {
  phoneNumber: string | null;
}

interface registerState {
  userInfo: UserInfo | null;
  address: string | null;
  phoneNumber: string | null;
  detailAddress: string | null;
}

interface updateProfileDataState {
  // displayName: string;
  phoneNumber: string;
  address: string;
  detailAddress: string;
  userInfo: UserInfo | null;
  // email: string;
  // password: string;
}
interface LogInState {
  userInfo: UserInfo;
  isLogged: boolean;
}

const initialState: AuthState = {
  isLogged: false,
  address: '',
  detailAddress: '',
  isAddressSuccess: false,
  userInfo: null,
  phoneNumber: null,
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
      state.detailAddress = action.payload.detailAddress;
    },
    setIsAddressSuccess: (state, action: PayloadAction<boolean>) => {
      state.isAddressSuccess = action.payload;
    },
    setPhoneNumber: (state, action: PayloadAction<setPhoneNumber>) => {
      state.phoneNumber = action.payload.phoneNumber;
    },
    register: (state, action: PayloadAction<registerState>) => {
      state.userInfo = action.payload.userInfo;
      state.isLogged = true;
      state.address = action.payload.address;
      state.detailAddress = action.payload.detailAddress;
      state.phoneNumber = action.payload.phoneNumber;
    },
    updateProfileData: (
      state,
      action: PayloadAction<updateProfileDataState>,
    ) => {
      // state.displayName = action.payload.displayName;
      state.phoneNumber = action.payload.phoneNumber;
      state.address = action.payload.address;
      state.detailAddress = action.payload.detailAddress;
      state.userInfo = action.payload.userInfo;
    },
    logIn: (state, action: PayloadAction<LogInState>) => {
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

export const {
  setUserInfo,
  setAddress,
  setIsAddressSuccess,
  setPhoneNumber,
  register,
  updateProfileData,
  logIn,
  logOut,
} = signUpSlice.actions;

export default signUpSlice.reducer;
