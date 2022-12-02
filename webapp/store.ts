import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import topBarSlice from './slices/TopBarSlice'

const store = configureStore({
  reducer: {
    topBar: topBarSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch 

export default store;