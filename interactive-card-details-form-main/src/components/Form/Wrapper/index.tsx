import { ReactNode } from 'react'
import styles from './wrapper.module.scss'

type WrapperProps = {
    label: string
    for: string
    children: ReactNode
}

export const Wrapper = (props: WrapperProps) => {
    return (
        <div className={styles['field-wrapper']}>
            <label className={styles['field-wrapper__label']} htmlFor={props.for}>{props.label}</label>
            {props.children}
        </div>
    )
}
