import { ReactNode } from 'react'
import styles from './fieldset.module.scss'

type FieldsetProps = {
    legend: string
    children: ReactNode
}

export const Fieldset = ({ legend, children }: FieldsetProps) => {
    return (
        <fieldset className={styles.fieldset}>
            <legend className={styles.fieldset__legend}>{legend}</legend>
            {children}
        </fieldset>
    )
}
