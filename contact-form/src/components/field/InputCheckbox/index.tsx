'use client'

import { useValidationContext } from '@/contexts/form/validationContext'
import clsx from 'clsx'
import { ComponentProps } from 'react'
import { Control } from '../Control'
import styles from './input-checkbox.module.scss'

type InputCheckboxProps = {
    label: string
} & ComponentProps<'input'>

export const InputCheckbox = ({ label, ...props }: InputCheckboxProps) => {
    const { field } = useValidationContext(props.name!)

    return (
        <Control errorMessage={field?.error}>
            <input
                className={clsx(
                    styles['input-checkbox'],
                    field?.hasError && 'invalid',
                )}
                type='checkbox'
                {...props}
            />
            {label}
        </Control>
    )
}
