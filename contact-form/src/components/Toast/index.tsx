import Check from '@/assets/images/icon-success-check.svg'
import Image from 'next/image'
import styles from './toast.module.scss'

export const Toast = () => {
    return (
        <div role='alert' className={styles.toast}>
            <div className={styles.toast__heading}>
                <Image src={Check} alt='check' width={12} height={12} />
                <h3>Message Sent!</h3>
            </div>

            <p className={styles.toast__message}>
                Thanks for completing the form! We&apos;ll be touching soon!
            </p>
        </div>
    )
}
