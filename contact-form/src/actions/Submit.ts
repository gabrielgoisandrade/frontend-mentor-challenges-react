import { FieldError } from '@/@types/fieldError'

type Schema = {
    firstName: FormDataEntryValue | null
    lastName: FormDataEntryValue | null
    email: FormDataEntryValue | null
    queryType: FormDataEntryValue | null
    message: FormDataEntryValue | null
    communication: FormDataEntryValue | null
}

export const submitForm = async (form: FormData): Promise<FieldError[]> => {
    const errors: FieldError[] = []

    const data: Schema = {
        firstName: form.get('firstName'),
        lastName: form.get('lastName'),
        email: form.get('email'),
        queryType: form.get('queryType'),
        message: form.get('message'),
        communication: form.get('communication'),
    }

    if (!data.firstName)
        errors.push({ field: 'firstName', error: 'This field is required' })

    if (!data.lastName)
        errors.push({ field: 'lastName', error: 'This field is required' })

    if (!data.email)
        errors.push({ field: 'email', error: 'This field is required' })

    if (!data.email?.toString().includes('@'))
        errors.push({
            field: 'email',
            error: 'Please enter a valid email address',
        })

    if (!data.queryType)
        errors.push({
            field: 'queryType',
            error: 'Please select a query type',
        })

    if (!data.message)
        errors.push({
            field: 'message',
            error: 'This field is required',
        })

    if (!data.communication)
        errors.push({
            field: 'communication',
            error: 'To submit this form, please consent to being contacted',
        })

    return errors
}
