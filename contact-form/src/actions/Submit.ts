import { FieldError } from '@/@types/fieldError'

type Schema = {
    firstName: FormDataEntryValue | null
    lastName: FormDataEntryValue | null
    email: FormDataEntryValue | null
    queryType: FormDataEntryValue | null
    message: FormDataEntryValue | null
    allowContact: FormDataEntryValue | null
}

export const submitForm = async (form: FormData): Promise<FieldError[]> => {
    const errors: FieldError[] = []

    const data: Schema = {
        firstName: form.get('firstName'),
        lastName: form.get('lastName'),
        email: form.get('email'),
        queryType: form.get('queryType'),
        message: form.get('message'),
        allowContact: form.get('allowContact'),
    }

    if (!data.firstName)
        errors.push({ firstName: { hasError: true, error: '' } })

    return errors
}
