'use client'

import { useValidationContext } from '@/contexts/form/validationContext'
import getError from '@/utils/getError'
import { ErrorContainer } from '../field/ErrorContainer'
import { InputCheckbox } from '../field/InputCheckbox'

export const Communication = () => {
    const { fieldErrors } = useValidationContext()
    const field = getError(fieldErrors, 'communication')

    return (
        <ErrorContainer errorMessage={field?.error}>
            <InputCheckbox
                type='checkbox'
                name='communication'
                label='I consent to being contacted by the team *'
            />
        </ErrorContainer>
    )
}
