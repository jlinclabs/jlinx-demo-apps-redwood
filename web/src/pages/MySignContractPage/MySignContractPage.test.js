import { render } from '@redwoodjs/testing/web'

import MySignContractPage from './MySignContractPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MySignContractPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MySignContractPage />)
    }).not.toThrow()
  })
})
