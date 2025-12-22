import { Card } from '@/components/Card'
import { Form } from '@/components/Form'
import { Fieldset } from '@/components/Form/Fieldset'
import { Wrapper } from '@/components/Form/Wrapper'
import { FormRow } from '../components/Form/FormRow/index'
import styles from './page.module.scss'

export default function Home() {
    return (
        <main className={styles.page}>
            <article className={styles.card}>
                <Card />

                <Form>
                    <Wrapper label='CARDHOLDER NAME' for='name'>
                        <input
                            type='text'
                            id='name'
                            placeholder='e.g. Jane Appleseed'
                        />
                    </Wrapper>

                    <Wrapper label='CARD NUMBER' for='card-number'>
                        <input
                            type='text'
                            id='card-number'
                            placeholder='e.g. 1234 5678 9123 0000'
                        />
                    </Wrapper>

                    <FormRow>
                        <Fieldset legend='EXP. DATE (MM/YY)'>
                            <FormRow>
								<input type='text' id='month' placeholder='MM' />
								<input type='text' id='year' placeholder='YY' />
							</FormRow>
                        </Fieldset>

                        <Wrapper label='CVC' for='cvc'>
                            <input
                                type='text'
                                id='cvc'
                                placeholder='e.g. 123'
                            />
                        </Wrapper>
                    </FormRow>

                    <button>Confirm</button>
                </Form>
            </article>
        </main>
    )
}
