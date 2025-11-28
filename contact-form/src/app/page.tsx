'use client'

import { Input } from '@/components/field/Input'
import { FormEvent } from 'react'
import styles from './page.module.scss'

export default function Home() {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <section className={styles.contact}>
            <h2 className={styles.contact__title}>Contact Us</h2>

            <form
                onSubmit={handleSubmit}
                className={styles.contact__form}
                method='GET'
            >
                {/* first name */}
                <Input label='First Name *' />
                <label>
                    <span>First Name *</span>
                    <input type='text' name='firstName' />
                </label>

                {/* last name */}
                <label>
                    <span>Last Name *</span>
                    <input type='text' name='lastName' />
                </label>

                {/* email */}
                <label>
                    <span>Email Address *</span>
                    <input type='email' name='email' />
                </label>

                {/* query type */}
                <fieldset>
                    <legend>Query type *</legend>
                    <label>
                        <input type='radio' name='queryType' /> General Enquiry
                    </label>
                    <label>
                        <input type='radio' name='queryType' /> Support Request
                    </label>
                </fieldset>

                {/* message */}
                <label>
                    <span>Message *</span>
                    <textarea name='message' rows={8}></textarea>
                </label>

                {/* allow contact */}
                <label>
                    <input type='checkbox' name='allowContact' />I consent to
                    being contacted by the team *
                </label>

                {/* submit */}
                <button className={styles.form__submit} type='submit'>
                    Submit
                </button>
            </form>
        </section>
    )
}
