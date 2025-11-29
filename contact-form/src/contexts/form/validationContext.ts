'use client'

import { FieldError } from '@/@types/fieldError'
import { createContext, Dispatch, SetStateAction, useContext } from 'react'

type ValidationContextProps = {
    field: FieldError
    setFields: Dispatch<SetStateAction<FieldError[]>>
}

export const ValidationContext = createContext<ValidationContextProps>({
    field: {},
    setFields: () => {},
})

export const useValidationContext = (fieldName?: string) => {
    const { field, setFields } = useContext(ValidationContext)

    return {
        field: fieldName ? field[fieldName] : undefined,
        setFields,
    }
}
