import { NAME_SORT_ORDER, PRIORITY_SORT_ORDER } from "../../constant";
import { ItemTaskProps } from "../../models/TaskModels";

export const handleSortListTask = (
    listTask: Array<ItemTaskProps>,
    priorityOrder: PRIORITY_SORT_ORDER,
    nameOrder: NAME_SORT_ORDER) => {
    return listTask.sort((a,b)=> {
        switch (priorityOrder) {
            case PRIORITY_SORT_ORDER.DECREASE:
                switch (nameOrder) {
                    case NAME_SORT_ORDER.A_Z:
                        return (b.priorityLevel - a.priorityLevel || a.name.localeCompare(b.name))
                    default:
                        return (b.priorityLevel - a.priorityLevel || b.name.localeCompare(a.name))
                }
            default:
                switch (nameOrder) {
                    case NAME_SORT_ORDER.A_Z:
                        return (a.priorityLevel - b.priorityLevel || a.name.localeCompare(b.name))
                    default:
                        return (a.priorityLevel - b.priorityLevel || b.name.localeCompare(a.name))
                }
        }
    })
}