import { render } from '@redwoodjs/testing/web'

import NewsletterSignup from './NewsletterSignup'

describe('NewsletterSignup', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewsletterSignup />)
    }).not.toThrow()
  })
})
