import { render } from '@redwoodjs/testing/web'

import MyIdentifiersList from './MyIdentifiersList'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MyIdentifiersList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MyIdentifiersList />)
    }).not.toThrow()
  })
})
