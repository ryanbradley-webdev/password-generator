import Button from '../button/Button'
import styles from './form.module.css'

export default function Form() {
    return (
        <form
            className={styles.form}
        >

            <fieldset>

                <div>

                    <label htmlFor='length'>
                        Character Length
                    </label>

                    <span>
                        10
                    </span>

                </div>

                <input type="range" name="length" id="length" />

            </fieldset>

            <fieldset>

                <label htmlFor="upper">

                    <input
                        type="checkbox"
                        name="upper"
                        id="upper"
                        value='upper'
                    />

                    <span>
                        Include Uppercase Letters
                    </span>

                </label>

                <label htmlFor="lower">

                    <input
                        type="checkbox"
                        name="lower"
                        id="lower"
                        value='lower'
                    />

                    <span>
                        Include Lowercase Letters
                    </span>

                </label>

                <label htmlFor="numbers">

                    <input
                        type="checkbox"
                        name="numbers"
                        id="numbers"
                        value='numbers'
                    />

                    <span>
                        Include Numbers
                    </span>

                </label>

                <label htmlFor="symbols">

                    <input
                        type="checkbox"
                        name="symbols"
                        id="symbols"
                        value='symbols'
                    />

                    <span>
                        Include Symbols
                    </span>

                </label>

            </fieldset>

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

                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>

                </div>

            </div>

            <Button />

        </form>
    )
}