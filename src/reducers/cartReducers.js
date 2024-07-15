import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  listCart: [],
  listProductAfterChcekout: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers:{
    addCart: (state, actions) => {
      const existingProduct = state.listCart.find(item => item.id === actions.payload.id);
      if (existingProduct) {
        existingProduct.qty += actions.payload.qty;
      } else {
        state.listCart.push(actions.payload);
      }
    },
    addProductAfterCheckout: (state, actions) => {
      actions.payload.forEach(element => {
        state.listProductAfterChcekout.push(element)
      });
    },
    removeCart: (state, actions) => {
      const productId = actions.payload
      state.listCart = state.listCart.filter(item => item.id !== productId)
    }
  }
})

export const {addCart, removeCart, addProductAfterCheckout} = cartSlice.actions;

export const deleteProductInCart = (product_id) => {
  return (dispatch, getState) => {
    dispatch(removeCart(product_id))
  }
}

export default cartSlice.reducer;