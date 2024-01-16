import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SignUpState {
  name: string;
  phoneNumber: number | null;
  email: string;
  address: string;
  isAddressSuccess: boolean;
}
interface AddAddress {
  address: string;
  isAddressSuccess: boolean;
}

const initialState: SignUpState = {
  name: '',
  phoneNumber: null,
  email: '',
  address: '',
  isAddressSuccess: false,
};

const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    addAddress: (state, action: PayloadAction<AddAddress>) => {
      console.log('state', state, 'action', action);
      return {
        ...state,
        address: action.payload.address,
        isAddressSuccess: true,
      };
    },
    logIn: (state, action: PayloadAction<AddAddress>) => {
      console.log('state', state, 'action', action);

      return { ...state, user: action.payload };
    },
    logOut: (state, action: PayloadAction<AddAddress>) => {
      console.log('state', state, 'action', action);
      return { ...state, user: null };
    },
    AuthIsReady: (state, action: PayloadAction<AddAddress>) => {
      console.log('state', state, 'action', action);

      return state;
    },
  },
});

export const { addAddress } = signUpSlice.actions;

export default signUpSlice.reducer;
