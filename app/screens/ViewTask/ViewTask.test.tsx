import React from 'react';
import { Alert } from 'react-native';
import renderer from 'react-test-renderer';
import { render, fireEvent, } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { setupStore } from '../../store';
import { testItemSlice } from '../../redux/Task/taskSlice.test';
import ViewTask from '.';

const ID_INPUT_NAME = 'MInput_input_Name'
const ID_INPUT_DESCRIPTION = 'MInput_input_Description'

const testRoute: any = {
    params: {
        item: testItemSlice
    }
}

const navigateMock = jest.fn();
const navigation: any = {
    navigate: navigateMock
};

describe("<ViewTask />", () => {
    test('renders with no item correctly', () => {
        const tree = renderer
            .create(
                <Provider store={setupStore()}>
                    <ViewTask navigation={navigation} />
                </Provider>
            )
            .toJSON()
        expect(tree).toMatchSnapshot();
    });

    test('renders with item correctly', () => {
        const tree = render
            (
                <Provider store={setupStore()}>
                    <ViewTask navigation={navigation} route={testRoute} />
                </Provider>
            )
        expect(tree.getByTestId(ID_INPUT_NAME).props.value).toBe('name');
        expect(tree.getByTestId(ID_INPUT_DESCRIPTION).props.value).toBe('description');
    });

    test('add item correctly', () => {
        const { getByTestId, getByText } = render
            (
                <Provider store={setupStore()}>
                    <ViewTask navigation={navigation} />
                </Provider>
            )
        const inputName = getByTestId(ID_INPUT_NAME);
        expect(getByTestId(ID_INPUT_NAME).props.value).toBe('')
        fireEvent.changeText(inputName, 'name');
        expect(getByTestId(ID_INPUT_NAME).props.value).toBe('name')

        const inputDescription = getByTestId(ID_INPUT_DESCRIPTION);
        expect(getByTestId(ID_INPUT_DESCRIPTION).props.value).toBe('')
        fireEvent.changeText(inputDescription, 'description');
        expect(getByTestId(ID_INPUT_DESCRIPTION).props.value).toBe('description')
        jest.spyOn(Alert, 'alert');
        fireEvent.press(getByText('Add'));
        expect(Alert.alert).toHaveBeenCalledWith('Add success')
    });

    test('add item without name', () => {
        const { getByTestId, getByText } = render
            (
                <Provider store={setupStore()}>
                    <ViewTask navigation={navigation} />
                </Provider>
            )
        const inputDescription = getByTestId(ID_INPUT_DESCRIPTION);
        expect(getByTestId(ID_INPUT_DESCRIPTION).props.value).toBe('')
        fireEvent.changeText(inputDescription, 'description');
        expect(getByTestId(ID_INPUT_DESCRIPTION).props.value).toBe('description')
        jest.spyOn(Alert, 'alert');
        fireEvent.press(getByText('Add'));
        expect(Alert.alert).toHaveBeenCalledWith("Enter task's name")
    });

    test('delete item correctly', () => {
        const initialState = {
            task: {
                listTask: [testItemSlice],
                completedTask: 0
            }
        };
        const store = setupStore(initialState)
        const { getByTestId, getByText } = render
            (
                <Provider store={store}>
                    <ViewTask navigation={navigation} route={testRoute} />
                </Provider>
            )
        expect(getByTestId(ID_INPUT_NAME).props.value).toBe('name');
        expect(getByTestId(ID_INPUT_DESCRIPTION).props.value).toBe('description');
    });
});
