import { MetaTags } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'
import { navigate } from '@redwoodjs/router'

import SimpleHero from 'src/components/SimpleHero'
import FeaturesGrid from 'src/components/FeaturesGrid'

const HomePage = () => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <>
      <MetaTags
        title="Home"
        // description="Home description"
        /* you should un-comment description and add a unique description, 155 characters or less
        You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <div className="flex flex-col items-center justify-center max-w-4xl pb-16 mx-auto border-gray-200 dark:border-gray-700">
        <SimpleHero />

        <div className="py-2 mt-8 space-y-8 text-center text-gray-500">
          {isAuthenticated ? (
            <p>
              Signed in as{' '}
              <span className="font-bold">{currentUser.email}</span>
            </p>
          ) : (
            <p>Please log in or sign up to view team and player data.</p>
          )}
          <button
            className="w-32 p-2 mx-auto my-2 bg-gray-200 rounded-md hover:bg-gray-400"
            onClick={async () => {
              if (isAuthenticated) {
                await logOut()
                navigate('/')
              } else {
                navigate('/login')
              }
            }}
          >
            {isAuthenticated ? 'Log out' : 'Log in'}
          </button>
        </div>

        <FeaturesGrid />
      </div>
    </>
  )
}

export default HomePage
