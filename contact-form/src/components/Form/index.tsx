import { ReactNode } from 'react'
import styles from './form.module.scss'

type FormProps = {
    children: ReactNode
}

export const Form = ({ children }: FormProps) => {
    return (
        <form action=''>
            {children}

            <button className={styles.form__submit} type='submit'>
                Submit
            </button>
        </form>
    )
}
