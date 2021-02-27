import { useContext } from 'react'
import { ChallengesContext } from '../context/ChallengesContext'

import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengesContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://pbs.twimg.com/profile_images/1327332074521571336/rKgvfzg4_400x400.jpg" alt=""/>
            <div>
                <strong>Thiago Oliveira</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}