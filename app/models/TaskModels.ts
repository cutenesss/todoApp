import { PRIORITY_LEVEL } from "../constant"

export interface ItemTaskProps {
  id: number
  name: string
  description: string
  priorityLevel: PRIORITY_LEVEL,
  isCompleted: boolean
}
