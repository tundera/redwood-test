import type { Player } from 'types/graphql'

import { motion } from 'framer-motion'

import { useCloudinaryImage } from 'src/hooks/useCloudinaryImage'

type PlayerCardProps = {
  player: Player
}

const PlayerCard = ({ player }: PlayerCardProps) => {
  const { imageURL: headshot } = useCloudinaryImage(
    `nba/players/${player.handle}`
  )
  const { imageURL: logo } = useCloudinaryImage(
    `nba/teams/${player.team.handle}`
  )

  return (
    <motion.article
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="relative flex flex-col justify-end h-48 bg-white shadow-2xl dark:bg-gray-900 w-80"
    >
      <img
        src={logo}
        alt="Team logo"
        className="absolute object-cover w-full h-full opacity-10 -translate-x-4"
      />
      <div className="pt-2">
        <div className="flex items-end mx-4 justify-evenly">
          <img
            src={headshot}
            alt="Player headshot"
            className="relative object-cover w-32 h-32"
          />
          <div className="ml-2">
            <p className="w-full text-sm font-medium tracking-tight text-gray-500 md:text-md dark:text-gray-400">
              #{player.number} | {player.position}
            </p>
            <p className="w-full mb-6 font-medium tracking-tight text-gray-900 text-md md:text-lg sm:mb-10 dark:text-gray-100">
              {player.name}
            </p>
          </div>
          <div className="self-start">
            {logo && (
              <img
                src={logo}
                alt="Team logo"
                width={50}
                height={50}
                className="object-cover"
              />
            )}
          </div>
        </div>
      </div>
      <div
        className="text-gray-800 border-t-4 grid grid-cols-3 divide-x-2 divide-black dark:text-gray-200"
        style={{
          borderTopColor: player?.team?.colorScheme?.primary ?? 'gray.500',
        }}
      >
        <div className="py-1 text-center">
          <p className="text-xs font-bold uppercase">Height</p>
          <p className="text-xs">{player.height ?? '---'}</p>
        </div>
        <div className="py-1 text-center">
          <p className="text-xs font-bold uppercase">Weight</p>
          <p className="text-xs">{player.weight ?? '---'}</p>
        </div>
        <div className="py-1 text-center">
          <p className="text-xs font-bold uppercase">Position</p>
          <p className="text-xs">{player.position ?? '---'}</p>
        </div>
      </div>
    </motion.article>
  )
}

export default PlayerCard
