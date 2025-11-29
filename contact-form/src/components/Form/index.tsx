'use client'

import { submitForm } from '@/actions/Submit'
import { useValidationContext } from '@/contexts/form/validationContext'
import { ComponentProps, ReactNode } from 'react'
import styles from './form.module.scss'

type FormProps = {
    children: ReactNode
} & ComponentProps<'form'>

export const Form = ({ children }: FormProps) => {
    const { setFields } = useValidationContext()

    const handleSubmit = async (form: FormData) => {
        const results = await submitForm(form)

        if (results.length) setFields(results)
    }

    return (
        <form className={styles.form} action={handleSubmit}>
            {children}

            <button className={styles.form__submit} type='submit'>
                Submit
            </button>
        </form>
    )
}
