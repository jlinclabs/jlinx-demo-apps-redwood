import { render } from '@redwoodjs/testing/web'

import MyIdentifierPage from './MyIdentifierPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MyIdentifierPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MyIdentifierPage />)
    }).not.toThrow()
  })
})
