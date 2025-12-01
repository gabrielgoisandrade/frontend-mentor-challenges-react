'use client'

import { submitForm } from '@/actions/submit'
import { useValidationContext } from '@/contexts/form/validationContext'
import { ComponentProps, ReactNode, useState } from 'react'
import { Toast } from '../Toast'
import styles from './form.module.scss'

type FormProps = {
    children: ReactNode
} & ComponentProps<'form'>

export const Form = ({ children }: FormProps) => {
    const [success, setSuccess] = useState(false)

    const { setFieldErrors } = useValidationContext()

    const handleSubmit = async (form: FormData) => {
        const results = await submitForm(form)

        if (results.length) {
            setFieldErrors(results)
            setSuccess(false)
            return
        }

        setSuccess(true)
        window.scrollTo({ top: 0 })
    }

    return (
        <>
            {success && <Toast />}

            <form className={styles.form} action={handleSubmit}>
                {children}

                <button className={styles.form__submit} type='submit'>
                    Submit
                </button>
            </form>
        </>
    )
}
