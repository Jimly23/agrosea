import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false
}

const authSlice = createSlice({
  name:'auth',
  initialState,
  reducers:{
    setAuth: (state, actions) => {
      state.isAuthenticated = actions.payload
    }
  }
})

export const {setAuth} = authSlice.actions;
export default authSlice.reducer;