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
    },
    removeCart: (state, actions) => {
      const productId = actions.payload
      state.listCart = state.listCart.filter(item => item.id !== productId)
    }
  }
})

export const {addCart, removeCart} = cartSlice.actions;

export const deleteProductInCart = (product_id) => {
  return (dispatch, getState) => {
    dispatch(removeCart(product_id))
  }
}

export default cartSlice.reducer;