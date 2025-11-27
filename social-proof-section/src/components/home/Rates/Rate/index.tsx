import { RateType } from '@/@types/Rate'
import IconStar from '@/assets/images/icon-star.svg'
import Image from 'next/image'
import styles from './rate.module.css'

type RateProps = {
    props: RateType
}

export const Rate = ({ props }: RateProps) => {
    const starIcons = Array(props.stars).fill(IconStar)

    return (
        <div className={styles.rate}>
            <div className={styles.stars}>
                {starIcons.map((star, index) => (
                    <Image key={index} src={star} width={16} height={16} alt='Star' />
                ))}
            </div>

            <p className={styles.rateDescription}>{props.description}</p>
        </div>
    )
}
