import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ItemTaskProps } from '../../models/TaskModels'

export interface ProductState {
  listTask: Array<ItemTaskProps>
}

const initialState: ProductState = {
  listTask: [],
}

interface editTaskBody {
  idOldItem: number
  newItem: ItemTaskProps
}

const TaskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<ItemTaskProps>) {
      state.listTask = state.listTask.concat(action.payload)
    },
    editTask(state, action: PayloadAction<editTaskBody>) {
      const currentItemIndex = state.listTask.findIndex(
        task => task.id === action.payload.idOldItem
      )
      const newListTask = [...state.listTask]
      newListTask[currentItemIndex].description =
        action.payload.newItem.description
      newListTask[currentItemIndex].name = action.payload.newItem.name
      state.listTask = newListTask
    },
  },
})

export const { addTask, editTask } = TaskSlice.actions
export default TaskSlice.reducer
