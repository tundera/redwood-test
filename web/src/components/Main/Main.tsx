import type { ReactNode } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

type MainProps = {
  children: ReactNode
}

const Main = ({ children }: MainProps) => {
  return (
    <AnimatePresence>
      <motion.main
        key="main"
        className="flex flex-col items-center justify-center flex-grow min-h-screen text-black bg-white dark:text-white dark:bg-black"
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
  )
}

export default Main
