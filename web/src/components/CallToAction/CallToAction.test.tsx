import { render } from '@redwoodjs/testing/web'

import CallToAction from './CallToAction'

describe('CallToAction', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CallToAction />)
    }).not.toThrow()
  })
})
