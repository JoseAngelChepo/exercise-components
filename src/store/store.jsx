import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import { loggerMiddleware, authMetricsMiddleware } from './middleware'

export const store = configureStore({
  reducer: {
    auth: authReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: ['auth/loginAsync/pending', 'auth/loginAsync/fulfilled', 'auth/loginAsync/rejected'],
      }
    }).concat(loggerMiddleware, authMetricsMiddleware),
  devTools: true
})
