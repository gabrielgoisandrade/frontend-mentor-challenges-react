import { ReactNode } from 'react';
import styles from './error-container.module.scss';

type ErrorContainerProps = { children: ReactNode; errorMessage?: string }

export const ErrorContainer = ({
    children,
    errorMessage,
}: ErrorContainerProps) => {
    return (
        <div className={styles['error-container']}>
            {children}

            {errorMessage ? (
                <span className={styles['error-container__message']}>
                    {errorMessage}
                </span>
            ) : (
                ''
            )}
        </div>
    )
}
