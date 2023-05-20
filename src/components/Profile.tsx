import { useContext } from 'react'
import { ChallengesContext } from '../context/ChallengesContext'

import styles from '../styles/components/Profile.module.css'

export function Profile() {
  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img
        src="https://avatars.cloudflare.steamstatic.com/ec310121643cdcf57186478d7368c9b59c0aec5b_full.jpg"
        alt="profile"
      />
      <div>
        <strong>Íris Oliveira</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  )
}
