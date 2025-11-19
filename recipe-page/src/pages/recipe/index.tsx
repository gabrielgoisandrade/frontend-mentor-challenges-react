import Omelette from '../../assets/images/image-omelette.jpeg'
import { Ingredients } from '../../components/recipe/Ingredients'
import { Instructions } from '../../components/recipe/Instructions'
import { Nutrition } from '../../components/recipe/Nutrition'
import { Preparation } from '../../components/recipe/Preparation'
import { Wrapper } from '../../components/Wrapper'
import styles from './styles.module.css'

export default function Recipe() {
    return (
        <article className={styles.recipe}>
            <header className={styles.recipeHeader}>
                <div className={styles.headerCover}>
                    <img src={Omelette} width={1312} height={600} alt='Omelette' />
                </div>

                <Wrapper>
                    <h1>Simple Omelette Recipe</h1>

                    <p className={styles.recipeDescription}>
                        An easy and quick dish, perfect for any meal. This
                        classic omelette combines beaten eggs cooked to
                        perfection, optionally filled with your choice of
                        cheese, vegetables, or meats.
                    </p>
                </Wrapper>
            </header>

            <Wrapper>
                <Preparation />
                <Ingredients />

                <hr />
                <Instructions />

                <hr />
                <Nutrition />
            </Wrapper>
        </article>
    )
}
