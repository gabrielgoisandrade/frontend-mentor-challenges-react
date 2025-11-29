'use client'

import { FieldError } from '@/@types/fieldError'
import { ReactNode, useState } from 'react'
import { ValidationContext } from './validationContext'

type ValidationProviderProps = {
    children: ReactNode
}

export const ValidationProvider = ({ children }: ValidationProviderProps) => {
    const [field, setField] = useState<FieldError>({})

    return (
        <ValidationContext.Provider value={{ field, setFields: setField }}>
            {children}
        </ValidationContext.Provider>
    )
}
