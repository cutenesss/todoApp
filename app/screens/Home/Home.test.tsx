import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, screen } from '@testing-library/react-native';
import HomeScreen from '.';
import { Provider } from 'react-redux';
import {setupStore} from '../../store';

const testTask = {
  id: 123,
  name: 'name',
  description: 'description'
}

describe("<Home />", () => {
  test('renders correctly', () => {
    const navigateMock = jest.fn();
    const navigation: any = {
      navigate: navigateMock
    };
    const tree = renderer
      .create(
        <Provider store={setupStore()}>
          <HomeScreen navigation={navigation} />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot();
  });

  test('onPressItem works correctly', () => {
    const navigateMock = jest.fn();
    const navigation: any = {
      navigate: navigateMock
    };
    const initialState = {
      task: {
        listTask: [testTask]
      }
    };
    const store = setupStore(initialState)

    const component = (
      <Provider store={store}>
        <HomeScreen navigation={navigation} />
      </Provider>
    );

    const tree = render(component);
    const item = tree.getByTestId('TaskItem_123');
    expect(tree.getByTestId('TaskItem_123')).toBeTruthy();
    fireEvent.press(item);
    expect(navigateMock).toBeCalledTimes(1);
  });

  test('onPressButton works correctly', () => {
    const navigateMock = jest.fn();
    const navigation: any = {
      navigate: navigateMock
    };
    render(
      <Provider store={setupStore()}>
        <HomeScreen navigation={navigation} />
      </Provider>
    );
    fireEvent.press(screen.getByText("+"));
    expect(navigateMock).toBeCalledTimes(1);
  });
});