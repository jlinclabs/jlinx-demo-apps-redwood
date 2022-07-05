import { render } from '@redwoodjs/testing/web'

import NewContractButton from './NewContractButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NewContractButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewContractButton />)
    }).not.toThrow()
  })
})
