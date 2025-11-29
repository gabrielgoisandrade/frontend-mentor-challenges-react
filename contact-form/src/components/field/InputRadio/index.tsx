'use client'

import { useValidationContext } from '@/contexts/form/validationContext'
import clsx from 'clsx'
import { ComponentProps } from 'react'
import { Control } from '../Control'
import styles from './input-radio.module.scss'

type InputRadioProps = {
    label: string
} & ComponentProps<'input'>

export const InputRadio = ({ label, ...props }: InputRadioProps) => {
    const { field } = useValidationContext(props.name!)

    return (
        <Control errorMessage={field?.error}>
            <input
                className={clsx(
                    styles['input-radio'],
                    field?.hasError && 'invalid',
                )}
                type='radio'
                {...props}
            />
            {label}
        </Control>
    )
}
