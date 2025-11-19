import type { ReactNode } from 'react'
import styles from './styles.module.css'

type SectionProps = {
    children: ReactNode
    className?: string
}

export const Section = ({ children, className }: SectionProps) => {
    return (
        <section
            className={
                className ? `${styles.section} ${className}` : styles.section
            }
        >
            {children}
        </section>
    )
}
