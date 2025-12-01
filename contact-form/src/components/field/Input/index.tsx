'use client'

import { useValidationContext } from '@/contexts/form/validationContext'
import getError from '@/utils/getError'
import { clsx } from 'clsx'
import { ComponentProps } from 'react'
import { Control } from '../Control'
import { ErrorContainer } from '../ErrorContainer'
import styles from './input.module.scss'

type InputProps = {
    label?: string
} & ComponentProps<'input'>

export const Input = ({ label, ...props }: InputProps) => {
    const { fieldErrors } = useValidationContext()

    const field = getError(fieldErrors, props.name!)

    return (
        <ErrorContainer errorMessage={field?.error}>
            <Control label={label} hasError={!!field?.error}>
                <input
                    className={clsx(styles.input, field?.error && 'invalid')}
                    aria-invalid={!!field?.error}
                    aria-describedby='error-message'
                    {...props}
                />
            </Control>
        </ErrorContainer>
    )
}
