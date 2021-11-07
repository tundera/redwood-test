import { MetaTags } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'
import { navigate } from '@redwoodjs/router'

import SimpleHero from 'src/components/SimpleHero'
import FeaturesGrid from 'src/components/FeaturesGrid'
import NewsletterSignup from 'src/components/NewsletterSignup'

const HomePage = () => {
  return (
    <>
      <MetaTags
        title="Home"
        // description="Home description"
        /* you should un-comment description and add a unique description, 155 characters or less
        You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <div className="flex flex-col items-center justify-center pb-16 mx-auto border-gray-200 dark:border-gray-700">
        <SimpleHero />
        <FeaturesGrid />
        <NewsletterSignup />
      </div>
    </>
  )
}

export default HomePage
