'use client'

import { useValidationContext } from '@/contexts/form/validationContext'
import getError from '@/utils/getError'
import { ErrorContainer } from '../field/ErrorContainer'
import { Fieldset } from '../field/Fieldset'
import { InputRadio } from '../field/InputRadio'
import { FormRow } from '../FormRow'

export const QueryType = () => {
    const { fieldErrors } = useValidationContext()
    const field = getError(fieldErrors, 'queryType')

    return (
        <ErrorContainer errorMessage={field?.error}>
            <Fieldset legend='Query Type *'>
                <FormRow>
                    <InputRadio label='General Enquiry' name='queryType' />
                    <InputRadio label='Support Request' name='queryType' />
                </FormRow>
            </Fieldset>
        </ErrorContainer>
    )
}
