import CardLogo from '@/assets/images/card-logo.svg'
import Image from 'next/image'
import styles from './card.module.scss'

export const Card = () => {
    return (
        <div className={styles.card}>
            <div className={styles['card__back']}>
                <div className={styles['card-informations__cvc']}>000</div>
            </div>

            <div className={styles['card__front']}>
                <div className={styles['card-informations']}>
                    <Image
                        src={CardLogo}
                        width={24}
                        height={24}
                        alt='Card logo'
                        className={styles['card-informations__logo']}
                    />

                    <div className={styles['card-informations__number']}>
                        <span>0000</span>
						<span>0000</span>
						<span>0000</span>
						<span>0000</span>
                    </div>

                    <div className={styles['card-informations__customer-info']}>
                        <span>name</span>
                        <span>00/00</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
