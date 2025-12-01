import { Communication } from '@/components/Communication'
import { Input } from '@/components/field/Input'
import { Textarea } from '@/components/field/Textarea'
import { Form } from '@/components/Form'
import { FormRow } from '@/components/FormRow'
import { QueryType } from '@/components/QueryType'
import { ValidationProvider } from '@/contexts/form/ValidationProvider'
import styles from './page.module.scss'

export default function Home() {
    return (
        <ValidationProvider>
            <section className={styles.contact}>
                <h2 className={styles.contact__title}>Contact Us</h2>

                <Form>
                    <FormRow>
                        {/* first name */}
                        <Input label='First Name *' name='firstName' />
                        {/* last name */}
                        <Input
                            label='Last Name *'
                            type='text'
                            name='lastName'
                        />
                    </FormRow>

                    <Input label='Email Address *' type='text' name='email' />

                    <QueryType />

                    <Textarea
                        label='Message *'
                        name='message'
                        rows={8}
                    ></Textarea>

                    <Communication />
                </Form>
            </section>
        </ValidationProvider>
    )
}
