import { useAuth } from '@redwoodjs/auth'
import { Link, routes, navigate } from '@redwoodjs/router'

import NavigationLink from 'src/components/NavigationLink'
import { useNavigation } from 'src/hooks/useNavigation'

const Header = () => {
  const { isAuthenticated, logOut } = useAuth()

  const navigation = useNavigation()

  return (
    <header className="bg-black w-full backdrop-blur-sm saturate-150 z-10 sticky top-0">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <Link to={routes.home()}>
              <span className="sr-only">Home</span>
              <img className="h-20 w-auto" src="/brand.svg" alt="Brand logo" />
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <NavigationLink
                  key={link.name}
                  to={link.to}
                  className="text-base font-medium text-white hover:text-indigo-50"
                  activeClassName="text-base font-medium text-indigo-50"
                >
                  {link.name}
                </NavigationLink>
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4">
            {isAuthenticated ? (
              <button
                className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
                onClick={async () => {
                  await logOut()
                  navigate('/')
                }}
              >
                Sign out
              </button>
            ) : (
              <>
                <Link
                  to={routes.login()}
                  className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
                >
                  Sign in
                </Link>
                <Link
                  to={routes.signup()}
                  className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {navigation.map((link) => (
            <NavigationLink
              key={link.name}
              to={link.to}
              className="text-base font-medium text-white hover:text-indigo-50"
              activeClassName="text-base font-medium text-indigo-50"
            >
              {link.name}
            </NavigationLink>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Header
