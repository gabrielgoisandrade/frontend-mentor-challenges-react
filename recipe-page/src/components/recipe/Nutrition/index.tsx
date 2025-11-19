import { Section } from '../../Section'
import styles from './styles.module.css'

export const Nutrition = () => {
    return (
        <Section>
            <h2>Nutrition</h2>

            <p>
                The table below shows nutritional values per serving without the
                additional fillings.
            </p>

            <table className={styles.nutritionTable}>
                <tbody>
					<tr>
						<td>Calories</td>
						<td>277kcal</td>
					</tr>
					<tr>
						<td>Carbs</td>
						<td>0g</td>
					</tr>
					<tr>
						<td>Protein</td>
						<td>20g</td>
					</tr>
					<tr>
						<td>Fat</td>
						<td>22g</td>
					</tr>
				</tbody>
            </table>
        </Section>
    )
}
