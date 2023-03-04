import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react-native';
import { TaskItem } from '.';
import { testItemSlice } from '../../../../redux/Task/taskSlice.test';

describe("<TaskItem />", () => {
    const mockOnPress = jest.fn();
    const defaultProps = {
        item: testItemSlice,
        onPress: mockOnPress
    }

    test('renders correctly when task is not completed', () => {
        const tree = renderer.create(<TaskItem {...defaultProps} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('renders correctly when task is completed', () => {
        const tree = renderer.create(<TaskItem {...defaultProps} item={{...testItemSlice, isCompleted: true}} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('onPress works correctly', () => {
        const itemTask = render(<TaskItem {...defaultProps} />);
        fireEvent.press(itemTask.getByTestId("TaskItem_123"));
        expect(mockOnPress).toBeCalledTimes(1);
    });
});