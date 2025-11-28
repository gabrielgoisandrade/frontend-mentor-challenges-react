import { Fieldset } from '@/components/field/Fieldset'
import { Input } from '@/components/field/Input'
import { InputCheckbox } from '@/components/field/InputCheckbox'
import { InputRadio } from '@/components/field/InputRadio'
import { Textarea } from '@/components/field/Textarea'
import { Form } from '@/components/Form'
import { FormRow } from '@/components/FormRow'
import styles from './page.module.scss'

export default function Home() {
    return (
        <section className={styles.contact}>
            <h2 className={styles.contact__title}>Contact Us</h2>

            <Form>
                <FormRow>
                    {/* first name */}
                    <Input label='First Name *' name='firstName' />

                    {/* last name */}
                    <Input label='Last Name *' type='text' name='lastName' />
                </FormRow>

                {/* email */}
                <Input label='Email Address *' type='email' name='email' />

                {/* query type */}
                <Fieldset legend='Query Type *'>
                    <FormRow>
						<InputRadio label='General Enquiry' name='queryType' />
						<InputRadio label='Support Request' name='queryType' />
					</FormRow>
                </Fieldset>

                {/* message */}
                <Textarea label='Message *' name='message' rows={8}></Textarea>

                {/* allow contact */}
                <InputCheckbox
                    type='checkbox'
                    name='allowContact'
                    label='I consent to
                    being contacted by the team *'
                />
            </Form>
        </section>
    )
}
