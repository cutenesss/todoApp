import { handleSortListTask } from '.';
import { NAME_SORT_ORDER, PRIORITY_LEVEL, PRIORITY_SORT_ORDER } from '../../constant';

const testList = [
    {
        id: 1,
        name: 'A',
        description: 'description1',
        isCompleted: false,
        priorityLevel: PRIORITY_LEVEL.HIGH,
    },
    {
        id: 2,
        name: 'B',
        description: 'description2',
        isCompleted: false,
        priorityLevel: PRIORITY_LEVEL.NORMAL,
    },
    {
        id: 3,
        name: 'C',
        description: 'description3',
        isCompleted: false,
        priorityLevel: PRIORITY_LEVEL.HIGH,
    },
    {
        id: 4,
        name: 'D',
        description: 'description4',
        isCompleted: false,
        priorityLevel: PRIORITY_LEVEL.NORMAL,
    }
]

describe("getPriorityLevel", () => {
    test('handleSortListTask with a-z name order and decrease priority correctly', () => {
        const listSorted = handleSortListTask(testList, PRIORITY_SORT_ORDER.DECREASE, NAME_SORT_ORDER.A_Z)
        expect(listSorted[0].name).toBe('A')
        expect(listSorted[1].name).toBe('C')
        expect(listSorted[2].name).toBe('B')
        expect(listSorted[3].name).toBe('D')
    });

    test('handleSortListTask with a-z name order and increase priority correctly', () => {
        const listSorted = handleSortListTask(testList, PRIORITY_SORT_ORDER.INCREASE, NAME_SORT_ORDER.A_Z)
        expect(listSorted[0].name).toBe('B')
        expect(listSorted[1].name).toBe('D')
        expect(listSorted[2].name).toBe('A')
        expect(listSorted[3].name).toBe('C')
    });

    test('handleSortListTask with z-a name order and decrease priority correctly', () => {
        const listSorted = handleSortListTask(testList, PRIORITY_SORT_ORDER.DECREASE, NAME_SORT_ORDER.Z_A)
        expect(listSorted[0].name).toBe('C')
        expect(listSorted[1].name).toBe('A')
        expect(listSorted[2].name).toBe('D')
        expect(listSorted[3].name).toBe('B')
    });

    test('handleSortListTask with z-a name order and increase priority correctly', () => {
        const listSorted = handleSortListTask(testList, PRIORITY_SORT_ORDER.INCREASE, NAME_SORT_ORDER.Z_A)
        expect(listSorted[0].name).toBe('D')
        expect(listSorted[1].name).toBe('B')
        expect(listSorted[2].name).toBe('C')
        expect(listSorted[3].name).toBe('A')
    });
});