import {persistStore} from 'redux-persist'
import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './redux/reducers'
import { useDispatch } from 'react-redux'

const store = configureStore({
  reducer: rootReducer,
})


export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export type RootState = ReturnType<typeof store.getState>

const persistor = persistStore(store as any)

export default store
export { persistor }