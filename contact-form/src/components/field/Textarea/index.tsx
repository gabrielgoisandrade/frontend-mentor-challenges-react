'use client'

import { useValidationContext } from '@/contexts/form/validationContext'
import getError from '@/utils/getError'
import clsx from 'clsx'
import { ComponentProps } from 'react'
import { Control } from '../Control'
import { ErrorContainer } from '../ErrorContainer'
import styles from './textarea.module.scss'

type TextareaProps = {
    label: string
} & ComponentProps<'textarea'>

export const Textarea = ({ label, ...props }: TextareaProps) => {
    const { fieldErrors } = useValidationContext()
    const field = getError(fieldErrors, props.name!)

    return (
        <ErrorContainer errorMessage={field?.error}>
            <Control label={label} hasError={!!field?.error}>
                <textarea
                    className={clsx(styles.textarea, field?.error && 'invalid')}
                    {...props}
                ></textarea>
            </Control>
        </ErrorContainer>
    )
}
