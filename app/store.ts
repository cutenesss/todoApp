import { configureStore, PreloadedState } from '@reduxjs/toolkit'
import RootReducer from './rootReducer'
import Reactotron from './config/ReactotronConfig'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux'
import DebugConfig from './config/DebugConfig'

// const enhancers = DebugConfig.reactotron ? [Reactotron.createEnhancer!()] : []

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: RootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    preloadedState
  // enhancers,
  })
}

export type RootState = ReturnType<typeof RootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
