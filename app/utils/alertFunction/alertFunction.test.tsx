import renderer from 'react-test-renderer';
import { render, fireEvent, screen } from '@testing-library/react-native';
import { onAlert } from './alertFunction';
import { Alert, TouchableOpacity, View } from 'react-native';

describe("onAlert", () => {
    const mockOnPress = jest.fn();
    test('basic case with title, message and no okFunction', () => {
        const onPress = () => onAlert({ title: 'title', message: 'message' })
        const { getByTestId } = render(
            <View>
                <TouchableOpacity testID='press' onPress={onPress}>Press</TouchableOpacity>
            </View>
        );
        jest.spyOn(Alert, 'alert');
        fireEvent.press(getByTestId('press'));
        expect(Alert.alert).toHaveBeenCalledWith("title", "message", [{ "onPress": undefined, "text": "OK" }])
    });

    test('case with title and no message', () => {
        const onPress = () => onAlert({ title: 'title' })
        const { getByTestId } = render(
            <View>
                <TouchableOpacity testID='press' onPress={onPress}>Press</TouchableOpacity>
            </View>
        );
        jest.spyOn(Alert, 'alert');
        fireEvent.press(getByTestId('press'));
        expect(Alert.alert).toHaveBeenCalledWith("title", undefined, [{ "onPress": undefined, "text": "OK" }])
    });

    test('case with title, okFunction and no message', () => {
        const onPress = () => onAlert({ title: 'title', okFunction: mockOnPress })
        const { getByTestId, getByText } = render(
            <View>
                <TouchableOpacity testID='press' onPress={onPress}>Press</TouchableOpacity>
            </View>
        );
        jest.spyOn(Alert, 'alert');
        fireEvent.press(getByTestId('press'));
        expect(Alert.alert).toHaveBeenCalledWith("title", undefined, [{ "onPress": mockOnPress, "text": "OK" }])
        //@ts-ignore
        Alert.alert.mock.calls[0][2][0].onPress();
        expect(mockOnPress).toBeCalledTimes(1);
    });
});