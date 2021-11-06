import { render } from '@redwoodjs/testing/web'

import NavigationLink from './NavigationLink'

describe('NavigationLink', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NavigationLink />)
    }).not.toThrow()
  })
})
