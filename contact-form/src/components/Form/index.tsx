'use client'

import { FormEvent, ReactNode } from 'react'
import styles from './form.module.scss'

type FormProps = {
    children: ReactNode
}

export const Form = ({ children }: FormProps) => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

		// valida campos
		// manda a mensagem via context (ou dispatcher) para o control
		// control recebe e coloca a mensagem na tela
		// envia um boolean se tem erro para os outros componentes de input para aplicar a classe de erro
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit} action=''>
            {children}

            <button className={styles.form__submit} type='submit'>
                Submit
            </button>
        </form>
    )
}
