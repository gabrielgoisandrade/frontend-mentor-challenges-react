'use client'

import { FieldError } from '@/@types/fieldError'
import { createContext, Dispatch, SetStateAction, useContext } from 'react'

type ValidationContextProps = {
    fieldErrors: FieldError[]
    setFieldErrors: Dispatch<SetStateAction<FieldError[]>>
}

export const ValidationContext = createContext<ValidationContextProps>({
    fieldErrors: [],
    setFieldErrors: () => {},
})

export const useValidationContext = () => useContext(ValidationContext)
