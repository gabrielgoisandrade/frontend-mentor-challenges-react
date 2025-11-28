import { ComponentProps } from 'react'
import { Control } from '../Control'
import styles from './input-checkbox.module.scss'

type InputCheckboxProps = {
    label: string
} & ComponentProps<'input'>

export const InputCheckbox = ({ label, ...props }: InputCheckboxProps) => {
    return (
        <Control>
            <input
                className={styles['input-checkbox']}
                type='checkbox'
                {...props}
            />
            {label}
        </Control>
    )
}
