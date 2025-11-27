import { RateType } from '@/@types/Rate'
import { Rate } from './Rate'
import styles from './rates.module.css'

export const Rates = () => {
    const rates: RateType[] = [
        {
            stars: 5,
            description: 'Rated 5 Stars in Reviews',
        },
        {
            stars: 5,
            description: 'Rated 5 Stars in Report Guru',
        },
        {
            stars: 5,
            description: 'Rated 5 Stars in BestTech',
        },
    ]

    return (
        <div className={styles.rates}>
            {rates.map((rate) => (
                <Rate key={rate.description} props={rate} />
            ))}
        </div>
    )
}
