import { ComponentProps } from 'react'
import { Control } from '../Control'
import styles from './textarea.module.scss'

type TextareaProps = {
    label: string
} & ComponentProps<'textarea'>

export const Textarea = ({ label, ...props }: TextareaProps) => {
    return (
        <Control label={label}>
            <textarea
                className={styles.textarea}
                {...props}
            ></textarea>
        </Control>
    )
}
