import { render } from '@redwoodjs/testing/web'

import SimpleHero from './SimpleHero'

describe('SimpleHero', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SimpleHero />)
    }).not.toThrow()
  })
})
