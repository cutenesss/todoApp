import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, screen } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import { setupStore } from '../../store';
import { renderWithProviders } from '../../utils/testUtils';
import { addTask } from '../../redux';
import AddEditTaskScreen from '.';

const ID_INPUT_NAME = 'MInput_input_Name'
const ID_INPUT_DESCRIPTION = 'MInput_input_Description'

const testRoute: any = {
  params: {
    item: {
      id: 123,
      name: 'name',
      description: 'description'
    }
  }
}

describe("<AddEditTask />", () => {
  it('renders with no item correctly', () => {
    const tree = renderer
      .create(
        <Provider store={setupStore()}>
          <AddEditTaskScreen />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot();
  });

  it('renders with item correctly', () => {
    const tree = render
      (
        <Provider store={setupStore()}>
          <AddEditTaskScreen route={testRoute} />
        </Provider>
      )
    expect(tree.getByTestId(ID_INPUT_NAME).props.value).toBe('name');
    expect(tree.getByTestId(ID_INPUT_DESCRIPTION).props.value).toBe('description');
  });

  it('add item correctly', () => {
    const {getByTestId, getByText} = render
      (
        <Provider store={setupStore()}>
          <AddEditTaskScreen />
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
    fireEvent.press(getByText('Add'));
    expect(getByText('Add success')).toBeTruthy()
  });
});