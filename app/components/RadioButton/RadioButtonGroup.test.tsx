import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, screen } from '@testing-library/react-native';
import { RadioButtonGroup } from '.';
import { PRIORITY_LEVEL } from '../../constant';

const listPriorityLevel = [
    {
        id: '1',
        label: PRIORITY_LEVEL.HIGH,
        value: PRIORITY_LEVEL.HIGH,
        selected: false
    },
    {
        id: '2',
        label: PRIORITY_LEVEL.NORMAL,
        value: PRIORITY_LEVEL.NORMAL,
        selected: false

    },
    {
        id: '3',
        label: PRIORITY_LEVEL.LOW,
        value: PRIORITY_LEVEL.LOW,
        selected: false
    }
]

describe("<RadioButtonGroup />", () => {
    const mockOnPress = jest.fn();
    const defaultProps = {
        title: 'Priority',
        initList: listPriorityLevel,
        onPress: mockOnPress,
        initValue: undefined,
        disabled: false
    }
    test('RadioButtonGroup correctly', async () => {
        const tree = renderer.create(
            <RadioButtonGroup {...defaultProps}/>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    // test('onPress works correctly', () => {
    //     render(<RadioButtonGroup {...defaultProps}/>);
    //     fireEvent.press(screen.getByText("+"));
    //     expect(mockOnPress).toBeCalledTimes(1);
    // });
});