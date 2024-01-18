import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserInfo } from 'firebase/auth';

const storedUserInfo = localStorage.getItem('userInfo');

interface SignUpState {
  isLogged: boolean;
  address: string;
  isAddressSuccess: boolean;
  userInfo: UserInfo | null;
}

interface AddAddress {
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
  userInfo: storedUserInfo ? JSON.parse(storedUserInfo) : null,
};

export const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    getUser: (state, action: PayloadAction<AddAddress>) => {
      console.log('action', action);
      return {
        ...state,
        address: action.payload.address,
        isAddressSuccess: true,
      };
    },
    addAddress: (state, action: PayloadAction<AddAddress>) => {
      console.log('action', action);
      return {
        ...state,
        address: action.payload.address,
        isAddressSuccess: true,
      };
    },
    logIn: (state, action: PayloadAction<LogInState>) => {
      console.log('회원가입/로그인', action.payload);
      console.log('user.providerData[0]', action.payload);
      state.userInfo = action.payload.userInfo;
      state.isLogged = true;

      localStorage.setItem('userInfo', JSON.stringify(action.payload.userInfo));
    },
    logOut: (state) => {
      state.isLogged = false;
      state.address = '';
      state.isAddressSuccess = false;
      state.userInfo = null;
      localStorage.removeItem('userInfo');
    },
  },
});

export const { addAddress, logIn, logOut } = signUpSlice.actions;

export default signUpSlice.reducer;
