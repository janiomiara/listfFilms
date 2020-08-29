import React from 'react'
import { render } from '@testing-library/react'
import Nav from './index'

test('Testing children of the Nav component', () => {
  const { container } = render(<Nav />)
  expect(container.firstChild.nodeName).toBe('NAV')
  expect(container.firstChild.firstChild.ATTRIBUTE_NODE).toBe(2)
  expect(container.firstChild.firstChild.nodeName).toBe('IMG')
})
