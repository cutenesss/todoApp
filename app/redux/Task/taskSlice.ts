import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ItemTaskProps } from '../../models/TaskModels'

export interface TaskState {
  listTask: Array<ItemTaskProps>
  completedTask: number
}

export const initialState: TaskState = {
  listTask: [],
  completedTask: 0
}

interface EditTaskBody {
  idItem: number
}

const TaskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setListTask(state, action: PayloadAction<Array<ItemTaskProps>>) {
      state.listTask = action.payload
    },
    addTask(state, action: PayloadAction<ItemTaskProps>) {
      state.listTask = state.listTask.concat(action.payload)
    },
    deleteTask(state, action: PayloadAction<EditTaskBody>) {
      const currentItemIndex = state.listTask.findIndex(
        task => task.id === action.payload.idItem
      )
      const newListTask = [...state.listTask]
      if (newListTask[currentItemIndex].isCompleted) state.completedTask -= 1
      newListTask.splice(currentItemIndex, 1)
      state.listTask = newListTask
    },
    completeTask(state, action: PayloadAction<EditTaskBody>) {
      const currentItemIndex = state.listTask.findIndex(
        task => task.id === action.payload.idItem
      )
      const newListTask = [...state.listTask]
      newListTask[currentItemIndex].isCompleted = true
      state.listTask = newListTask
      state.completedTask += 1
    },
  },
})

export const { addTask, completeTask, deleteTask, setListTask } = TaskSlice.actions
export default TaskSlice.reducer
