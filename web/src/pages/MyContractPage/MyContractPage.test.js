import { render } from '@redwoodjs/testing/web'

import MyContractPage from './MyContractPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MyContractPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MyContractPage />)
    }).not.toThrow()
  })
})
