import type { Team } from 'types/graphql'

import { motion } from 'framer-motion'

import { useCloudinaryImage } from 'src/hooks/useCloudinaryImage'

type TeamCardProps = {
  team: Team
}

const TeamCard = ({ team }: TeamCardProps) => {
  const { imageURL: logo } = useCloudinaryImage(`nba/teams/${team.handle}`)

  return (
    <motion.article
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="flex flex-col items-center justify-between w-64 h-64 py-4 bg-white rounded-lg shadow-2xl dark:bg-gray-900"
    >
      <div className="pt-2">
        <img src={logo} alt="Team logo" className="object-cover w-48 h-48" />
      </div>
      <div className="ml-2">
        <p className="w-full text-lg font-medium tracking-tight text-gray-500 md:text-xl dark:text-gray-400">
          {team.city} {team.name}
        </p>
      </div>
    </motion.article>
  )
}

export default TeamCard
