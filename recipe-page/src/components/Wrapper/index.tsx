import type { ReactNode } from 'react'
import styles from './styles.module.css'

type WrapperProps = {
    children: ReactNode
}

export const Wrapper = ({ children }: WrapperProps) => {
    return <div className={styles.wrapper}>{children}</div>
}
