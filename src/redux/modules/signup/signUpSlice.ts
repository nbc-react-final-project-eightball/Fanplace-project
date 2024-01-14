import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SignUpState {
  name: string;
  phoneNumber: number | null;
  email: string;
  address: string;
}

const initialState: SignUpState = {
  name: '',
  phoneNumber: null,
  email: '',
  address: '',
};

const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    setSignUpData: (state, action: PayloadAction<SignUpState>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setSignUpData } = signUpSlice.actions;

export default signUpSlice.reducer;
