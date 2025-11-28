import { ComponentProps } from 'react'
import { Control } from '../Control'
import styles from './input.module.scss'

type InputProps = {
    label?: string
} & ComponentProps<'input'>

export const Input = ({ label, ...props }: InputProps) => {
    return (
        <Control label={label}>
            <input className={styles.input} {...props} />
        </Control>
    )
}
