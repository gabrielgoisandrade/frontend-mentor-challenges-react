import { ReactNode } from "react"
import styles from './form-row.module.scss'

type FormRowProps = {
	children: ReactNode
}

export const FormRow = ({ children }: FormRowProps) => {
  return (
	<div className={styles['form-row']}>{children}</div>
  )
}
