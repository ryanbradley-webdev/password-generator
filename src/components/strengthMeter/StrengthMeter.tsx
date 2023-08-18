import styles from './strengthMeter.module.css'

export default function StrengthMeter() {
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
                    MEDIUM
                </span>

                <div
                    className={styles.segment_container}
                >

                    <div
                        className={styles.segment}
                    ></div>

                    <div
                        className={styles.segment}
                    ></div>

                    <div
                        className={styles.segment}
                    ></div>

                    <div
                        className={styles.segment}
                    ></div>

                </div>

            </div>

        </div>
    )
}