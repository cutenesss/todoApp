import TaskSlice, { initialState, addTask, editTask } from "./taskSlice";

const testData = {
    id: 123,
    name: 'name',
    description: 'description'
};

const testEditData = {
    id: 123,
    name: 'testEditData',
    description: 'description'
};

describe("tests for taskSlice", () => {
    test("initialize slice with initialValue", () => {
        const listSliceInit = TaskSlice(initialState, { type: "unknown" });
        expect(listSliceInit).toBe(initialState);
    });

    test("addTask", () => {
        const afterAddReducerOperation = TaskSlice(
            initialState,
            addTask(testData)
        );
        expect(afterAddReducerOperation.listTask[0].name).toBe(testData.name)
    });

    test("editTask", () => {
        const afterEditReducerOperation = TaskSlice(
            { listTask: [testData] },
            editTask({
                idOldItem: testData.id,
                newItem: testEditData
            })
        );
        expect(afterEditReducerOperation.listTask[0].name).toBe(testEditData.name)
    });
});