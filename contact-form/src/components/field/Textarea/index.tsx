'use client'

import { useValidationContext } from '@/contexts/form/validationContext'
import clsx from 'clsx'
import { ComponentProps } from 'react'
import { Control } from '../Control'
import styles from './textarea.module.scss'

type TextareaProps = {
    label: string
} & ComponentProps<'textarea'>

export const Textarea = ({ label, ...props }: TextareaProps) => {
    const { field } = useValidationContext(props.name!)

    return (
        <Control label={label} errorMessage={field?.error}>
            <textarea
                className={clsx(styles.textarea, field?.hasError && 'invalid')}
                {...props}
            ></textarea>
        </Control>
    )
}
