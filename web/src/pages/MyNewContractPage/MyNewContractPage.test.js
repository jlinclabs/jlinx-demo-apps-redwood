import { render } from '@redwoodjs/testing/web'

import MyNewContractPage from './MyNewContractPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MyNewContractPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MyNewContractPage />)
    }).not.toThrow()
  })
})
