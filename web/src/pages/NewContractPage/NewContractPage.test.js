import { render } from '@redwoodjs/testing/web'

import NewcontractPage from './NewcontractPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('NewcontractPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewcontractPage />)
    }).not.toThrow()
  })
})
