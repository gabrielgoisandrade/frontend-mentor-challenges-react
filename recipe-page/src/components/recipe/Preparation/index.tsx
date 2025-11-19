import { Section } from '../../Section'
import styles from './styles.module.css'

export const Preparation = () => {
    return (
        <Section className={styles.preparation}>
            <h3>Preparation time</h3>

            <ul>
                <li>
                    <b>Total:</b> Approximately 10 minutes
                </li>
                <li>
                    <b>Preparation:</b> 5 minutes
                </li>
                <li>
                    <b>Cooking:</b> 5 minutes
                </li>
            </ul>
        </Section>
    )
}
