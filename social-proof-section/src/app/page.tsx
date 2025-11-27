import { Comments } from '@/components/home/Comments'
import { Rates } from '@/components/home/Rates'
import styles from './page.module.css'

export default function Home() {
    return (
        <main className={styles.page}>
            <section aria-labelledby='review-heading'>
                <div className={styles.container}>
                    <header
                        className={`${styles.containerItem} ${styles.testimonialsHeader}`}
                    >
                        <h2
                            className={styles.testimonialsTitle}
                            id='review-heading'
                        >
                            10,000+ of our users love our products.
                        </h2>
                        <p className={styles.testimonialsDescription}>
                            We only provide great products combined with
                            excellent customer service. See what our satisfied
                            customers are saying about our services.
                        </p>
                    </header>

                    {/* avaliação */}
                    <div className={`${styles.containerItem}`}>
                        <Rates />
                    </div>

                    {/* comentários */}
                    <div className={`${styles.containerItem}`}>
                        <Comments />
                    </div>
                </div>
            </section>
        </main>
    )
}
