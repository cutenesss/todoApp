import { PRIORITY_LEVEL } from "../../constant";
import TaskSlice, { initialState, addTask, completeTask, deleteTask } from "./taskSlice";

export const testItemSlice = {
    id: 123,
    name: 'name',
    description: 'description',
    isCompleted: false,
    priorityLevel: PRIORITY_LEVEL.NORMAL,
};

describe("tests for taskSlice", () => {
    test("initialize slice with initialValue", () => {
        const listSliceInit = TaskSlice(initialState, { type: "unknown" });
        expect(listSliceInit).toBe(initialState);
    });

    test("addTask", () => {
        const afterAddReducerOperation = TaskSlice(
            initialState,
            addTask(testItemSlice)
        );
        expect(afterAddReducerOperation.listTask[0].name).toBe(testItemSlice.name)
    });

    test("completeTask", () => {
        const afterEditReducerOperation = TaskSlice(
            { listTask: [testItemSlice], completedTask: 0 },
            completeTask({ idItem: testItemSlice.id })
        );
        expect(afterEditReducerOperation.listTask[0].isCompleted).toBe(true)
        expect(afterEditReducerOperation.completedTask).toBe(1)
    });

    test("deleteTask", () => {
        const afterEditReducerOperation = TaskSlice(
            { listTask: [testItemSlice], completedTask: 0 },
            deleteTask({ idItem: testItemSlice.id })
        );
        expect(afterEditReducerOperation.listTask.length).toBe(0)
    });
});