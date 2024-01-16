import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserInfo } from 'firebase/auth';

interface SignUpState {
  isLogged: boolean;
  address: string;
  isAddressSuccess: boolean;
  userInfo: UserInfo;
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
  userInfo: {} as UserInfo,
};

const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
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
    },
    logOut: (state) => {
      return initialState;
    },
  },
});

export const { addAddress, logIn, logOut } = signUpSlice.actions;

export default signUpSlice.reducer;
