import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ItemTaskProps } from '../../models/TaskModels'

export interface ProductState {
  listTask: Array<ItemTaskProps>
}

const initialState: ProductState = {
  listTask: [],
}

interface addTaskBody {
  name: string
  description: string
  price: string
}

const TaskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<addTaskBody>) {
      state.listTask = state.listTask.concat(action.payload)
    },
  },
})

export const { addTask } = TaskSlice.actions
export default TaskSlice.reducer
