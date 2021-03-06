import { AnimatePresence, motion } from 'framer-motion'

import Navbar from 'src/components/Header'

type PlayersLayout = {
  children?: React.ReactNode
}

const PlayersLayout = ({ children }: PlayersLayout) => {
  return (
    <div className="flex flex-col items-center w-screen min-h-screen">
      <Navbar />

      <AnimatePresence exitBeforeEnter>
        <motion.main
          key="main"
          className="flex flex-col items-center justify-center flex-grow mx-auto my-32 text-black bg-white dark:text-white dark:bg-black"
          animate="enter"
          exit="exit"
          initial="initial"
          variants={{
            initial: { opacity: 0, y: 5 },
            enter: { opacity: 1, y: 0, transition: { duration: 0.2 } },
            exit: { opacity: 0, transition: { duration: 0.1 } },
          }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </div>
  )
}

export default PlayersLayout
