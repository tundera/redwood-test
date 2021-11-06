const SimpleHero = () => {
  return (
    <div className="px-4 mx-auto mt-16 max-w-7xl sm:mt-24 sm:px-6">
      <div className="text-center">
        <hgroup className="tracking-tight md:space-y-2">
          <h1 className="block text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Redwood Demo
          </h1>
          <h2 className="block text-xl font-bold text-indigo-600 sm:text-2xl md:text-3xl">
            Made with TailwindCSS
          </h2>
        </hgroup>
        <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          A complete demo application built using the Redwood.js framework.
        </p>
      </div>
    </div>
  )
}

export default SimpleHero
