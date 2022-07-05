import { render } from '@redwoodjs/testing/web'

import MyContractsList from './MyContractsList'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MyContractsList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MyContractsList />)
    }).not.toThrow()
  })
})
