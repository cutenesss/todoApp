import { PRIORITY_LEVEL } from "../../constant";

export const getPriorityLevel = (priorityLevel: PRIORITY_LEVEL) => {
    switch (priorityLevel) {
        case PRIORITY_LEVEL.HIGH:
            return 'High'
        case PRIORITY_LEVEL.NORMAL:
            return 'Normal'
        default:
            return 'Low'
    }
}