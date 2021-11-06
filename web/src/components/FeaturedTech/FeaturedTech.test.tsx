import { render } from '@redwoodjs/testing/web'

import FeaturedTech from './FeaturedTech'

describe('FeaturedTech', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FeaturedTech />)
    }).not.toThrow()
  })
})
