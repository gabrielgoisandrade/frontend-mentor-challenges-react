import { ReactNode } from 'react'
import styles from './control.module.scss'

type ControlProps = {
    label: string
    children: ReactNode
}

export const Control = ({ label, children }: ControlProps) => {
    return (
        <label className={styles.control}>
            <span className={styles.control__label}>{label}</span>
            {children}
        </label>
    )
}
