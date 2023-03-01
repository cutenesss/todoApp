import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react-native';
import { TaskItem } from '.';

describe("<TaskItem />", () => {
    const mockOnPress = jest.fn();
    const defaultProps = {
        item: {
            id: 123,
            name: 'name',
            description: 'description'
        },
        onPress: mockOnPress
    }
    test('renders correctly', () => {
        const tree = renderer.create(<TaskItem {...defaultProps} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('onPress works correctly', () => {
        const itemTask = render(<TaskItem {...defaultProps} />);
        fireEvent.press(itemTask.getByTestId("TaskItem_123"));
        expect(mockOnPress).toBeCalledTimes(1);
    });
});