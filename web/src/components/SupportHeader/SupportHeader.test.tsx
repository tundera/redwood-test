import { render } from '@redwoodjs/testing/web'

import SupportHeader from './SupportHeader'

describe('SupportHeader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SupportHeader />)
    }).not.toThrow()
  })
})
