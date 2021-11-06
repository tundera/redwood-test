import { render } from '@redwoodjs/testing/web'

import FeaturesGrid from './FeaturesGrid'

describe('FeaturesGrid', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FeaturesGrid />)
    }).not.toThrow()
  })
})
