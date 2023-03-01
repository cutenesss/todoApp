import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, screen } from '@testing-library/react-native';
import { FloatingButton } from '.';

describe("<FloatingButton />", () => {
    const mockOnPress = jest.fn();
    test('renders correctly', () => {
        const tree = renderer.create(<FloatingButton onPress={mockOnPress} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('onPress works correctly', () => {
        render(<FloatingButton onPress={mockOnPress} />);
        fireEvent.press(screen.getByText("+"));
        expect(mockOnPress).toBeCalledTimes(1);
    });
});