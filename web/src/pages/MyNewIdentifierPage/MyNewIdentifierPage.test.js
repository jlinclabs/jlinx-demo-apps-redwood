import { render } from '@redwoodjs/testing/web'

import MyNewIdentifierPage from './MyNewIdentifierPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MyNewIdentifierPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MyNewIdentifierPage />)
    }).not.toThrow()
  })
})
