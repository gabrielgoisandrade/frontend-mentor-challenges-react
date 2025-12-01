import clsx from 'clsx'
import { ReactNode } from 'react'
import styles from './control.module.scss'

type ControlProps = {
    children: ReactNode
    label?: string
    hasError?: boolean
}

export const Control = ({ label, children, hasError }: ControlProps) => {
    return (
        <label
            className={clsx(
                styles.control,
                hasError && styles['control--invalid'],
            )}
        >
            {label ? (
                <span className={styles.control__label}>{label}</span>
            ) : (
                ''
            )}
            {children}
        </label>
    )
}
