/**
 * @format
 */

import React from 'react'
import renderer from 'react-test-renderer'
import HomeScreen from '.'
import { Provider } from 'react-redux'
import store from '../../store'

test('render home page', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <HomeScreen />
      </Provider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
