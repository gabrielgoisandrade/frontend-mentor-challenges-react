import { Card } from '@/components/Card'
import styles from './page.module.scss'

export default function Home() {
    return (
        <main className={styles.page}>
            <article className={styles.card}>
                <Card />

                <form className={styles.form}>
                    <label>
                        <span>CARDHOLDER NAME</span>
                        <input type='text' />
                    </label>

                    <label>
                        <span>CARD NUMBER</span>
                        <input type='text' />
                    </label>

                    <fieldset>
                        <label>
                            <span>EXP.DATE</span>
                            <input type='text' />
                        </label>

                        <label>
                            <span>(MM/YY)</span>
                            <input type='text' />
                        </label>

                        <label>
                            <span>CVC</span>
                            <input type='text' />
                        </label>
                    </fieldset>

                    <button>Confirm</button>
                </form>
            </article>
        </main>
    )
}
