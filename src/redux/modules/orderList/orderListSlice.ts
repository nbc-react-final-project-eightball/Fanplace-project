import { createSlice } from "@reduxjs/toolkit"

export const orderListSlice  = createSlice({
	name: "orderList",
	initialState: {
		products: []
	},
	reducers: {
		setOrderList: (state, action) => {
			state.products = action.payload;
		},
	}
})

export const { setOrderList} = orderListSlice.actions;

export default orderListSlice.reducer;