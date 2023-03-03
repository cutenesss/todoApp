import { NAME_SORT_ORDER, PRIORITY_SORT_ORDER } from "../../constant";
import { ItemTaskProps } from "../../models/TaskModels";

const compareName = (a: ItemTaskProps, b: ItemTaskProps, order: NAME_SORT_ORDER) => {
    if (a.name < b.name) {
        return order === NAME_SORT_ORDER.A_Z ? -1 : 1;
    }
    if (a.name > b.name) {
        return order === NAME_SORT_ORDER.A_Z ? 1 : -1;
    }
    return 0;
}

const comparePriority = (a: ItemTaskProps, b: ItemTaskProps, order: PRIORITY_SORT_ORDER) => {
    if (a.priorityLevel < b.priorityLevel) {
        return order === PRIORITY_SORT_ORDER.INCREASE ? 1 : -1;
    }
    if (a.priorityLevel > b.priorityLevel) {
        return order === PRIORITY_SORT_ORDER.DECREASE ? -1 : 1;
    }
    return 0;
}

export const handleSortListTask = (
    listTask: Array<ItemTaskProps>,
    priorityOrder: PRIORITY_SORT_ORDER,
    nameOrder: NAME_SORT_ORDER) => {
    const newListTask = [...listTask]
    newListTask.sort((a, b) => compareName(a, b, nameOrder))
    newListTask.sort((a, b) => comparePriority(a, b, priorityOrder))
    console.log('newListTask', newListTask)
    return newListTask
}