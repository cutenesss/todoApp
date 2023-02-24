/**
 * @format
 */

import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import AddEditTaskScreen from '.'
import store from '../../store'

test('render add task list page', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <AddEditTaskScreen />
      </Provider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
