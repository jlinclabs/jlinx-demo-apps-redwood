import { render } from '@redwoodjs/testing/web'

import MyIdentifiersPage from './MyIdentifiersPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MyIdentifiersPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MyIdentifiersPage />)
    }).not.toThrow()
  })
})
