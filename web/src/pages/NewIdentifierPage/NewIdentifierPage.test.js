import { render } from '@redwoodjs/testing/web'

import NewIdentifierPage from './NewIdentifierPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('NewIdentifierPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewIdentifierPage />)
    }).not.toThrow()
  })
})
