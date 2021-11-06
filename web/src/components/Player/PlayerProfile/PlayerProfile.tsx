import type { FindPlayerById } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useCloudinaryImage } from 'src/hooks/useCloudinaryImage'

type PlayerProfileProps = {
  player: FindPlayerById['player']
}

const PlayerProfile = ({ player }: PlayerProfileProps) => {
  const { imageURL: headshot } = useCloudinaryImage(
    `nba/players/${player.handle}`
  )

  return (
    <div className="flex flex-col items-center w-full px-8 py-8 bg-gray-200 shadow-2xl dark:bg-800 space-y-8 md:w-144">
      <div className="pt-2">
        <img
          src={headshot}
          alt="Player headshot"
          className="object-cover w-96 h-96"
        />
      </div>
      <hgroup className="my-8 text-center space-y-4">
        <h1 className="text-2xl font-bold tracking-wide md:text-4xl">
          {player.name}
        </h1>
        <h2 className="w-full text-xl font-semibold tracking-tight text-gray-500 md:text-2xl dark:text-gray-400">
          #{player.number} | {player.position}
        </h2>
      </hgroup>
      <Link
        to={routes.team({ id: player.team.id })}
        className="text-lg font-semibold tracking-tight hover:font-bold"
      >
        {player.team.city} {player.team.name}
      </Link>
      <div className="flex flex-col w-32 space-y-2">
        <p className="inline-flex justify-between">
          <span className="italic">Height:</span>
          <span>{player.height}</span>
        </p>
        <p className="inline-flex justify-between">
          <span className="italic">Weight:</span>
          <span>{player.weight}</span>
        </p>
      </div>
    </div>
  )
}

export default PlayerProfile
