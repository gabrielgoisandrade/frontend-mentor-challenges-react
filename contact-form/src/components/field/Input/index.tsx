'use client'

import { useValidationContext } from '@/contexts/form/validationContext'
import { clsx } from 'clsx'
import { ComponentProps } from 'react'
import { Control } from '../Control'
import styles from './input.module.scss'

type InputProps = {
    label?: string
} & ComponentProps<'input'>

export const Input = ({ label, ...props }: InputProps) => {
    const { field } = useValidationContext(props.name)

    return (
        <Control label={label} errorMessage={field?.error}>
            <input
                className={clsx(styles.input, field?.hasError && 'invalid')}
                {...props}
            />
        </Control>
    )
}
