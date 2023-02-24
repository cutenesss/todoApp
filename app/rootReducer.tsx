import { combineReducers } from '@reduxjs/toolkit'
import taskSlice from './redux/Task/taskSlice'

const rootReducer = combineReducers({
  task: taskSlice,
})

export default rootReducer
