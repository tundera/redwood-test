import type { ComponentProps } from 'react'

import { NavLink, useMatch } from '@redwoodjs/router'

type NavigationLinkProps = ComponentProps<typeof NavLink>

const NavigationLink = ({ to, ...props }: NavigationLinkProps) => {
  const { match } = useMatch(to)

  return (
    <NavLink to={to} aria-current={match ? 'page' : undefined} {...props} />
  )
}

export default NavigationLink
