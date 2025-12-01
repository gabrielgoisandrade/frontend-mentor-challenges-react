import { FieldError } from '@/@types/fieldError'
import { Fields } from '@/@types/fields'

// eslint-disable-next-line import/no-anonymous-default-export
export default (fieldErros: FieldError[], fieldName: string) =>
    fieldErros.find(({ field }) => field === (fieldName as Fields))
