import { render } from '@redwoodjs/testing/web'

import MyContractsPage from './MyContractsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MyContractsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MyContractsPage />)
    }).not.toThrow()
  })
})
