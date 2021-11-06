import { AnimatePresence, motion } from 'framer-motion'

import Header from 'src/components/Header'

type TeamsLayout = {
  children?: React.ReactNode
}

const TeamsLayout = ({ children }: TeamsLayout) => {
  return (
    <div className="flex flex-col items-center w-screen min-h-screen">
      <Header />

      <AnimatePresence>
        <motion.main
          key="main"
          className="flex flex-col items-center justify-center flex-grow my-16 text-black bg-white dark:text-white dark:bg-black"
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

export default TeamsLayout
