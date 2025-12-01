import { ComponentProps } from 'react'
import { Control } from '../Control'
import styles from './input-radio.module.scss'

type InputRadioProps = {
    label: string
} & ComponentProps<'input'>

export const InputRadio = ({ label, ...props }: InputRadioProps) => {
    return (
        <Control>
            <input className={styles['input-radio']} type='radio' {...props} />
            {label}
        </Control>
    )
}
