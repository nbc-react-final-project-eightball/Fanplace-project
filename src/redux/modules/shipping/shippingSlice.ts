import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ShippingState {
  addressName: string;
  recipient: string;
  address: string;
  detailAddress: string | null;
  phoneNumber: string | null;
  // instructions: string | null;
  addresses: string[] | null;
}

const initialState: ShippingState = {
  addressName: '배송지',
  recipient: '',
  address: '',
  detailAddress: '',
  phoneNumber: null,
  addresses: [],
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
interface setAddresses {
  addresses: any;
}
export const shippingSlice = createSlice({
  name: 'shipping',
  initialState,
  reducers: {
    setAddressInfo: (state, action: PayloadAction<setAddressInfo>) => {
      console.log('setAddressInfo state   - action.payload', action.payload);
      state.addressName = action.payload.addressName;
      state.recipient = action.payload.recipient;
      state.address = action.payload.address;
      state.detailAddress = action.payload.detailAddress;
      state.phoneNumber = action.payload.phoneNumber;
      // // state.instructions = action.payload.instructions;
    },
    setAddresses: (state, action: PayloadAction<setAddresses>) => {
      console.log('원래 state', state);
      console.log(' action.payload', action.payload);
      if (Array.isArray(action.payload.addresses)) {
        state.addresses = action.payload.addresses;
      }
    },
  },
});

export const { setAddressInfo, setAddresses } = shippingSlice.actions;

export default shippingSlice.reducer;
