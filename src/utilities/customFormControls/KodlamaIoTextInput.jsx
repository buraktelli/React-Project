import { useField } from 'formik'
import { FormField, Label } from 'semantic-ui-react'
import React from 'react'

export default function KodlamaIoTextInput({ ...props }) {

    //reflect api kullaniyor
    const [field, meta] = useField(props)

    return (
        <FormField error={meta.touched && !!meta.error}>
            <input {...field} {...props} />
            {!!meta.error ? (
                <Label pointing basic color="red" content={meta.error}></Label>
            ) : null}
        </FormField>
    )
}
