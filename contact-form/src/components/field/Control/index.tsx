import { ReactNode } from 'react'
import styles from './control.module.scss'

type ControlProps = {
    children: ReactNode
    label?: string
    errorMessage?: string
}

export const Control = ({ label, children, errorMessage }: ControlProps) => {
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

            {errorMessage ? (
                <span className={styles['control__error-message']}>
                    {errorMessage}
                </span>
            ) : (
                ''
            )}
        </div>
    )
}
