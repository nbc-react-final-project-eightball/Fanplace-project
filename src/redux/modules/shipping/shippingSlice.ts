import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ShippingState {
  addressName: string;
  recipient: string;
  address: string;
  detailAddress: string | null;
  phoneNumber: string | null;
  // instructions: string | null;
}

const initialState: ShippingState = {
  addressName: '배송지',
  recipient: '',
  address: '',
  detailAddress: '',
  phoneNumber: null,
  // instructions: null,
};

interface setAddressInfo {
  addressName: string;
  recipient: string;
  address: string;
  detailAddress: string | null;
  phoneNumber: string;
  // instructions: string | null;
}
interface setData {
  data: any;
}
export const shippingSlice = createSlice({
  name: 'shipping',
  initialState,
  reducers: {
    setAddressInfo: (state, action: PayloadAction<setAddressInfo>) => {
      state.addressName = action.payload.addressName;
      state.recipient = action.payload.recipient;
      state.address = action.payload.address;
      state.detailAddress = action.payload.detailAddress;
      state.phoneNumber = action.payload.phoneNumber;
      // // state.instructions = action.payload.instructions;
    },
    setData: (state, action: PayloadAction<setData>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setAddressInfo, setData } = shippingSlice.actions;

export default shippingSlice.reducer;
