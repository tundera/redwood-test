const SimpleHero = () => {
  return (
    <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
      <div className="text-center">
        <hgroup className="tracking-tight md:space-y-2">
          <h1 className="block text-gray-900 text-4xl sm:text-5xl md:text-6xl font-extrabold">
            Redwood Demo
          </h1>
          <h2 className="block text-indigo-600 text-xl sm:text-2xl md:text-3xl font-bold">
            Made with TailwindCSS
          </h2>
        </hgroup>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          A complete demo application built using the Redwood.js framework.
        </p>
      </div>
    </div>
  )
}

export default SimpleHero
