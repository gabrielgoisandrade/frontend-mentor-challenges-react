'use client'

import { FieldError } from '@/@types/fieldError'
import { ReactNode, useState } from 'react'
import { ValidationContext } from './validationContext'

type ValidationProviderProps = {
    children: ReactNode
}

export const ValidationProvider = ({ children }: ValidationProviderProps) => {
    const [fieldErrors, setFieldErrors] = useState<FieldError[]>([])

    return (
        <ValidationContext.Provider value={{ fieldErrors, setFieldErrors }}>
            {children}
        </ValidationContext.Provider>
    )
}
