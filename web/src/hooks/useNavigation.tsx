import { useMemo } from 'react'
import { routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

export const useNavigation = () => {
  const { isAuthenticated } = useAuth()

  return useMemo(
    () =>
      isAuthenticated
        ? [
            { name: 'Teams', to: routes.teams() },
            { name: 'Players', to: routes.players() },
          ]
        : [
            { name: 'Home', to: routes.home() },
            { name: 'About', to: routes.about() },
          ],
    [isAuthenticated]
  )
}
