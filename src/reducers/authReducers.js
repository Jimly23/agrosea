import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null
}

const authSlice = createSlice({
  name:'auth',
  initialState,
  reducers:{
    setAuth: (state, actions) => {
      state.isAuthenticated = actions.payload
    },
    setUser: (state, actions) => {
      state.user = actions.payload
    }
  }
})

export const {setAuth, setUser} = authSlice.actions;
export default authSlice.reducer;