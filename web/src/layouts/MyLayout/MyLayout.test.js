import { render } from '@redwoodjs/testing/web'

import MyLayout from './MyLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MyLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MyLayout />)
    }).not.toThrow()
  })
})
