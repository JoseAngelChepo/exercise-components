import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  token: null,
  role: null,
  loading: false,
  error: null,
  loginAttemps: 0
}

export const loginAsync = createAsyncThunk(
  'auth/loginAsync',
  async (credentials, { rejectWithValue }) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      const timestamp = Date.now();
      if (credentials.email === 'admin@sellebrate.ai') {
        return {
          userData: credentials.email,
          role: 'admin',
          authToken: timestamp
        }
      } else {
        return {
          userData: credentials.email,
          role: 'user',
          authToken: timestamp
        }
      }
    } catch (error) { 
      return rejectWithValue("Error en el login")
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      const { userData, authToken, role } = action.payload
      state.user = userData,
      state.token = authToken,
      state.role = role
      state.error = null,
      state.loginAttemps += 1
    },
    logout: (state) => {
      state.user = null,
      state.token = null,
      state.role = null
      state.error = null
    },
    clearError: (state) => {
      state.error = null
    },
    incrementLoginAttemps: (state) => {
      state.loginAttemps += 1
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        loginAsync.pending, (state) => {
          state.loading = true
          state.error = null
        }
      )
      .addCase(
        loginAsync.fulfilled, (state, action) => {
          state.loading = false
          state.user = action.payload.userData
          state.token = action.payload.authToken
          state.role = action.payload.role
          state.error = null
          state.loginAttemps += 1
        }
      )
      .addCase(
        loginAsync.rejected, (state, action) => {
          state.loading = false
          state.error = action.payload
        }
      )
  }
})

export const selectUser = (state) => state.auth.user
export const selectToken = (state) => state.auth.token
export const selectIsAuthenticated = (state) => !!state.auth.user
export const selectAuthLoading = (state) => state.auth.loading
export const selectAuthError = (state) => state.auth.user
export const selectLoginAttempts = (state) => state.auth.loginAttempts

export const { login, logout, clearError, incrementLoginAttemps } = authSlice.actions
export default authSlice.reducer