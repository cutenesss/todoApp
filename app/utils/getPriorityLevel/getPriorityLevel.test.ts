import { getPriorityLevel } from '.';
import { PRIORITY_LEVEL } from '../../constant';

describe("getPriorityLevel", () => {
    test('getPriorityLevel correctly', () => {
        const getHighLevel = getPriorityLevel(PRIORITY_LEVEL.HIGH)
        expect(getHighLevel).toBe('High')
        const getNormalLevel = getPriorityLevel(PRIORITY_LEVEL.NORMAL)
        expect(getNormalLevel).toBe('Normal')
        const getLowLevel = getPriorityLevel(PRIORITY_LEVEL.LOW)
        expect(getLowLevel).toBe('Low')
    });
});