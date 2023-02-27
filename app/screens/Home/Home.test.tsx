import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, screen } from '@testing-library/react-native';
import HomeScreen from '.';
import { Provider } from 'react-redux';
import {setupStore} from '../../store';
import { renderWithProviders } from '../../utils/testUtils';
import { addTask } from '../../redux';

const testTask = {
  id: 123,
  name: 'name',
  description: 'description'
}

describe("<FloatingButton />", () => {
  const navigateMock = jest.fn();
  const navigation: any = {
    navigate: navigateMock
  };

  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={setupStore()}>
          <HomeScreen navigation={navigation} />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot();
  });

  it('onPressButton works correctly', () => {
    render(
      <Provider store={setupStore()}>
        <HomeScreen navigation={navigation} />
      </Provider>
    );
    fireEvent.press(screen.getByText("+"));
    expect(navigateMock).toBeCalledTimes(1);
  });
  // it('renders correctly', () => {
  //   const tree = renderer
  //     .create(
  //       <Provider store={store}>
  //         <HomeScreen navigation={navigation} />
  //       </Provider>
  //     )
  //     .toJSON()
  //   expect(tree).toMatchSnapshot();
  // });

  it('onPressItem works correctly', () => {
    const store = setupStore()
    store.dispatch(addTask(testTask))
  
    const { getByTestId } = renderWithProviders(<HomeScreen navigation={navigation} />, { store })
    expect(getByTestId('TaskItem_123')).toBeTruthy();
  });
});