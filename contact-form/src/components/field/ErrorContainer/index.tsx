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
                <p
                    role='alert'
                    id='error-message'
                    className={styles['error-container__message']}
                >
                    {errorMessage}
                </p>
            ) : (
                ''
            )}
        </div>
    )
}
