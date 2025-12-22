import { ReactNode } from "react"
import styles from './form.module.scss'

type FormProps = {
	children: ReactNode
}

export const Form = ({ children }: FormProps) => {
    return <form className={styles.form} action="">
		{children}
	</form>
}
