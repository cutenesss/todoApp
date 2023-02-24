/**
 * @format
 */

import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import store from '../app/store'
import Home from '../app/screens/Home'

test('render product list page', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Home />
      </Provider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
