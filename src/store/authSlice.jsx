import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  token: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      const { userData, authToken } = action.payload
      state.user = userData,
      state.token = authToken
    },
    logout: (state) => {
      state.user = null,
      state.token = null
    },
  }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer