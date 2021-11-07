const features = [
  { name: 'React', icon: '/logos/react.svg', description: '' },
  { name: 'Prisma', icon: '/logos/prisma.svg', description: '' },
  { name: 'GraphQL', icon: '/logos/graphql.svg', description: '' },
]

const FeaturesGrid = () => {
  return (
    <div className="relative py-16 bg-white sm:py-24 lg:py-32">
      <div className="max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">
          Development reimagined
        </h2>
        <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Automatic everything.
        </p>
        <p className="mx-auto mt-5 text-xl text-gray-500 max-w-prose">
          Everything you need to develop, test, and deploy full-stack
          applications.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root px-6 pb-8 rounded-lg bg-gray-50">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 rounded-md md:shadow-lg md:bg-white md:bg-opacity-50">
                        <img
                          src={feature.icon}
                          className="w-32 h-32 text-white"
                          aria-hidden="true"
                          alt={`${feature.name} logo`}
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      Ac tincidunt sapien vehicula erat auctor pellentesque
                      rhoncus. Et magna sit morbi lobortis.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturesGrid
