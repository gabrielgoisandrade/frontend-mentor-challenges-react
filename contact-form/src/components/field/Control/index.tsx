import { ReactNode } from 'react'
import styles from './control.module.scss'

type ControlProps = {
    label?: string
    children: ReactNode
    error?: string
}

export const Control = ({ label, children, error }: ControlProps) => {
    return (
        <div className={styles.control}>
            <label className={styles.control__wrapper}>
                {label ? (
                    <span className={styles.control__label}>{label}</span>
                ) : (
                    ''
                )}
                {children}
            </label>

            {error ? (
                <span className={styles['control__error-message']}>error</span>
            ) : (
                ''
            )}
        </div>
    )
}
