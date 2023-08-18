import { useState } from 'react'
import styles from './strengthMeter.module.css'

export default function StrengthMeter() {
    const [strength, setStrength] = useState(1)

    return (
        <div
            className={styles.strength_container}
        >

            <span>
                STRENGTH
            </span>

            <div
                className={styles.strength}
            >

                <span>
                    {strength === 1 && 'TOO WEAK!'}
                    {strength === 2 && 'WEAK'}
                    {strength === 3 && 'MEDIUM'}
                    {strength === 4 && 'STRONG'}
                </span>

                <div
                    className={styles.segment_container}
                >

                    <div
                        className={styles.segment}
                        data-filled={strength > 0}
                        data-strength={strength}
                    ></div>

                    <div
                        className={styles.segment}
                        data-filled={strength > 1}
                        data-strength={strength}
                    ></div>

                    <div
                        className={styles.segment}
                        data-filled={strength > 2}
                        data-strength={strength}
                    ></div>

                    <div
                        className={styles.segment}
                        data-filled={strength > 3}
                        data-strength={strength}
                    ></div>

                </div>

            </div>

        </div>
    )
}