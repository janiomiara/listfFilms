import React from 'react'
import { render } from '@testing-library/react'
import Nav from './index'

test('Testando filhos do component Nav', () => {
  const { container } = render(<Nav />)
  expect(container.firstChild.nodeName).toBe('NAV')
  expect(container.firstChild.firstChild.ATTRIBUTE_NODE).toBe(2)
  expect(container.firstChild.firstChild.nodeName).toBe('IMG')
})
