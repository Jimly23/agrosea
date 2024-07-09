import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  listCart: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers:{
    addCart: (state, actions) => {
      state.listCart.push(actions.payload)
    }
  }
})

export const {addCart} = cartSlice.actions;
export default cartSlice.reducer;